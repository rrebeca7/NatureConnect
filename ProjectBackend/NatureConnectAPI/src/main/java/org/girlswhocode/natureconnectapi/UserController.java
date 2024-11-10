package org.girlswhocode.natureconnectapi;

import org.springframework.beans.factory.annotation.Autowired;
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

    public void addUser(User user) {
       userRepository.save(user);
    }


    public User getUserByEmailAndPassword(String username, String password) {
        return userRepository.findByEmailAndPassword(username, password).orElse(null);
    }

//TO DO:
public void saveUserGoal() {
    userGoalRepository.save(new UserGoal()); //add more?
}

//get user goals (all the goals that user has completed)

//get user points



}