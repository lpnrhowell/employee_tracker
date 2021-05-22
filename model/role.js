class Role{
	constructor(id, title, Role, department) {
		this.id = id;
		this.title = title;
		this.role = role;
		this.department = department;
	}
	getId() {
		return this.id;
	}

	getTitle() {
		return this.title;
	}
	getRole() {
		return this.role;
	}
	getDepartment() {
		return this.department;
	}
}

module.exports = Role;
