class Employee {
	constructor(firstName, lastName, role, department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
		this.department = department
	}
	getFirstName() {
		return this.firstName;
	}

	getLastName() {
		return this.lastName;
	}
	getRole() {
		return this.title;
	}
  getDepartment() {
    return this.department

  }
}

module.exports = Employee;
