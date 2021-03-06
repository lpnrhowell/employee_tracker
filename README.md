# Employee_Tracker

A developed interface that make it easy for non-developers to view and interact with information stored in databases. These interfaces are known as Content Management Systems. The interfaces are architected and build as a solution for managing a company's employees using node, inquirer, and MySQL.

Instructions
### Database Schema Contains Three Tables:
![homepage](./assets/images/screenShot.png "homepage")

department:

id - INT PRIMARY KEY
name - to hold department name
role:

id - INT PRIMARY KEY
title - to hold role title
salary - DECIMAL to hold role salary
department_id - INT to hold reference to department role belongs to
employee:

id - INT PRIMARY KEY
first_name - to hold employee first name
last_name - to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
Build a command-line application that at a minimum allows the user to:

Add departments, roles, employees

View departments, roles, employees

Update employee roles

Bonus points if you're able to:

Update employee managers

View employees by manager

Delete departments, roles, and employees

View the total utilized budget of a department -- ie the combined salaries of all employees in that department

We can frame this challenge as follows:

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
How do you deliver this? Here are some guidelines:

Use the MySQL NPM package to connect to your MySQL database and perform queries.

Use InquirerJs NPM package to interact with the user via the command-line.

Use console.table to print MySQL rows to the console. There is a built-in version of console.table, but the NPM package formats the data a little better for our purposes.

You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

https://user-images.githubusercontent.com/79549867/119289162-0b509700-bc18-11eb-9357-3e1de2d25de4.mov




---

Copyright (c) [2021] [Robert Howell]


---

## Author Info
- GitHub - [Robert Howell](https://github.com/lpnrhowell)
- Email - [lnprhowell@gmail.com]()
