package com.codeWithProject.employee.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codeWithProject.employee.entity.User;
import com.codeWithProject.employee.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User login(String username, String password) {
        Optional<User> maybe = userRepository.findByUsername(username);
        if (maybe.isPresent()) {
            User u = maybe.get();
            if (u.getPassword().equals(password)) {
                return u;
            }
        }
        return null;
    }

    public User register(User user) {
        // in real app: validate, hash password, prevent duplicate username
        return userRepository.save(user);
    }
}
