class UserDAO {
	get full_name() {
		return `${this.first_name} ${this.last_name}`;
	}

	set full_name(name) {
		const tokens = name.split(' ');
		this.first_name = tokens[0];
		this.last_name = tokens[1];
	}

	static async findByEmail(email) {
		const user = await this.findOne(email);
		return user;
	}

	static async register(user) {
		// Create user in database
		const createdUser = await this.create({
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			password: user.password,
			created_at: user.created_at,
			updated_at: user.updated_at
		});

		return createdUser;
	}
}

export default UserDAO;
