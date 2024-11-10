package org.girlswhocode.natureconnectapi;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.girlswhocode.natureconnectapi.User;

import java.util.Optional;

public interface UserGoalRepository extends CrudRepository<UserGoal, Integer> {



}