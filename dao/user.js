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
        const user = await this.findOne({ email });
        if (user) return true;
        return false;
    }

    static async register(first_name, last_name, email, password) {
        // Create user in database
        const user = await this.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: password,
        });

        return user;
    }
}

module.exports = { User: UserDAO };