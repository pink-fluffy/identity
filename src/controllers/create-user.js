import enums from '../enums';
export default function makeCreateUser({ userService, ServiceResponse, ServiceData }) {
	return async function createUser(req) {
		const response = new ServiceResponse();
		try {
			const { first_name, last_name, email, password } = req.body;
			if (!(first_name && last_name && email && password))
				throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };

			const created = await register(first_name, last_name, email, password);
			const resBody = new ServiceData(created, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;

			response.body = resBody;
			response.status = status;
		} catch (err) {
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 * Register a new user of role CUSTOMER with given information
	 * @param {String} first_name
	 * @param {String} last_name
	 * @param {String} email
	 * @param {String} password
	 */
	async function register(first_name, last_name, email, password) {
		const userInfo = {
			first_name: first_name,
			last_name: last_name,
			email: email,
			password: password
		};

		const data = await userService.create(userInfo);
		return data;
	}
}
