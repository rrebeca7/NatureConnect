package org.girlswhocode.natureconnectapi;

import jakarta.persistence.PostLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path="/users") // This means URL's start with /demo (after Application path)
public class UserController {

    @Autowired // This means to get the bean called userRepository
    private UserRepository userRepository;

    @Autowired
    private UserGoalRepository userGoalRepository;

   @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) throws NoSuchAlgorithmException {

       //Validate user data
       if(user.getName() == null || user.getName().trim().isEmpty()) {
           return ResponseEntity.badRequest().body("Name empty or Invalid");
       }
       if(user.getEmail() == null || user.getEmail().trim().isEmpty()) {
           return ResponseEntity.badRequest().body("E-mail empty or invalid");
       }
       if(user.getPassword() == null || user.getPassword().trim().isEmpty()) {
           return ResponseEntity.badRequest().body("Password empty or invalid");
       }
       user.setPoints(0); //Initialize Zero points.
       //Encrypt password
       user.setPassword(User.GenerateMD5Hash(user.getPassword()));
       //Save User in the db.
       userRepository.save(user);
       user.setPassword("#######"); //Mask password, so it should not visible in the response.
       return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping(path="/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Integer userId) {
        User user = userRepository.findById(userId).orElse(null);
        if(user != null) {
            user.setPassword("#######"); //Mask password, so it should not visible in the response.
            return ResponseEntity.ok(user);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<User> getUserByEmailAndPassword(@RequestParam String username,@RequestParam String password) throws NoSuchAlgorithmException {

       String passwordInMD5 = User.GenerateMD5Hash(password);
        User user = userRepository.findByEmailAndPassword(username,passwordInMD5).orElse(null);
        if(user != null) {
            user.setPassword("#######"); //Mask password, so it should not visible in the response.
            return ResponseEntity.ok(user);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }



    @GetMapping(path="/{userId}/goals")
    public ResponseEntity<List<UserGoal>> getUserGoals(@PathVariable Integer userId) {

        List<UserGoal> userGoals = userGoalRepository.findByUserId(userId);
        if(userGoals != null) {
            return ResponseEntity.ok(userGoals);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

//TO DO:
public void saveUserGoal() {
    userGoalRepository.save(new UserGoal()); //add more?
}

//get user goals (all the goals that user has completed)

//get user points



}