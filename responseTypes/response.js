class Response {
    constructor(data = null, status = 200, err_code = 0, message = "") {
        this.data = data;
        this.status = status;
        this.err_code = err_code;
        this.message = message;
    }
}

module.exports = { Response };