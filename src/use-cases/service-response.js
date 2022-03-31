export class ServiceResponse {
	constructor(body, status = 200, last_modified = '') {
		this.body = body;
		this.status = status;
		this.last_modified = last_modified;
	}
}
export class ServiceData {
	constructor(data, message = '') {
		this.data = data;
		this.message = message;
	}
}
