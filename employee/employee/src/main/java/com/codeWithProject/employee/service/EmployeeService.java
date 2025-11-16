package com.codeWithProject.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codeWithProject.employee.entity.Employee;
import com.codeWithProject.employee.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee create(Employee emp) { return employeeRepository.save(emp); }
    public List<Employee> getAll() { return employeeRepository.findAll(); }
    public Employee getById(Long id) { return employeeRepository.findById(id).orElse(null); }
    public void delete(Long id) { employeeRepository.deleteById(id); }

    public Employee update(Long id, Employee updated) {
        Optional<Employee> opt = employeeRepository.findById(id);
        if (opt.isPresent()) {
            Employee e = opt.get();
            e.setName(updated.getName());
            e.setEmail(updated.getEmail());
            e.setPhone(updated.getPhone());
            e.setDepartment(updated.getDepartment());
            return employeeRepository.save(e);
        }
        throw new EntityNotFoundException("Employee not found: " + id);
    }
}
