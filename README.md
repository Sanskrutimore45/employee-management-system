# Employee Management System

A simple full-stack CRUD application built using Spring Boot (backend) and React (frontend).
It includes Login, Registration, and complete Employee Management (Add, Edit, Delete, View).
MySQL is used as the database.

This project is created for practice and learning full-stack development.

# Project Structure (Mono-repo)
employee-management-system/
│
├── employee/        → Spring Boot backend
└── employeeweb/     → React frontend

# Run Backend (Spring Boot)
cd employee


Update MySQL credentials in src/main/resources/application.properties

Start the backend:

mvn spring-boot:run


#Backend runs on:
 http://localhost:8080

# Run Frontend (React)
cd employeeweb
npm install
npm start


#Frontend runs on:
 http://localhost:3000

# Features

User Authentication

Register
Login

Employee Management (CRUD)

Add Employee
Edit Employee
Delete Employee
View All Employees

🔗 React → Spring Boot API integration

🗄️ MySQL database
