package org.girlswhocode.natureconnectapi;

import jakarta.persistence.PostLoad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/users") // This means URL's start with /demo (after Application path)
public class UserController {
    @Autowired // This means to get the bean called userRepository

    private UserRepository userRepository;
    private UserGoalRepository userGoalRepository;

   @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {

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
    public ResponseEntity<User> getUserByEmailAndPassword(@RequestParam String username,@RequestParam String password) {
        User user = userRepository.findByEmailAndPassword(username,password).orElse(null);
        if(user != null) {
            user.setPassword("#######"); //Mask password, so it should not visible in the response.
            return ResponseEntity.ok(user);
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