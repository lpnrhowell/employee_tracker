USE employee_TrackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('miquel', 'arozo', 1, 1), ('laquisha', 'adams', 2, 2), ('hussain', 'muhammed', 3, 3), ('nashima', 'almaini', 4, 4), ('Carol', 'Baskin', 5, 5);

USE employee_TrackerDB;

INSERT INTO role (title, salary, dept_id)
VALUES ('Tester', 80000.00, 1), ('Business Anaylst', 110000.00, 2), ('Senior Developer', 120000.00, 3), ('Benefits Specialist', 65000.00, 4), ('Scrum Master', 150000.00, 5);

USE employee_TrackerDB;

INSERT INTO department (dept_name)
VALUES ('QA'), ('Business'), ('Engineering'), ('Human Resources'), ('Product Manager');