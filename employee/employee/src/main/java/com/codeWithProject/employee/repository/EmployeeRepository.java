package com.codeWithProject.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codeWithProject.employee.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {}
