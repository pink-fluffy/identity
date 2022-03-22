class RegisterResponse {
    constructor(name, email, accessToken) {
        this.name = name;
        this.email = email;
        this.accessToken = accessToken;
        this.refreshToken = null;
    }
}

module.exports = { RegisterResponse };