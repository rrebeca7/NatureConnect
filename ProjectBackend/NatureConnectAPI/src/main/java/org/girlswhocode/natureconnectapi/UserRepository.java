package org.girlswhocode.natureconnectapi;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.girlswhocode.natureconnectapi.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
    @Query(value = "select * from User where email = ?1 and password = ?2", nativeQuery = true)
    Optional<User> findByEmailAndPassword(String email, String password);

}