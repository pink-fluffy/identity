import enums from '../enums';
export default function makeCreateUser({ userService, CreateData, ServiceResponse, ServiceData, createAccessToken }) {
	return async function createUser(body) {
		const response = new ServiceResponse();
		try {
			const { first_name, last_name, email, password } = body;
			if (!(first_name && last_name && email && password))
				throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };

			const created = await register(first_name, last_name, email, password);
			const resBody = new ServiceData(created.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;

			response.body = resBody;
			response.status = status;
			response.last_modified = created.last_modified;
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

		const user = await userService.create(userInfo);
		const accessToken = createAccessToken(user.id, user.email);

		const data = new CreateData({
			full_name: `${user.first_name} ${user.last_name}`,
			email: user.email,
			accessToken: accessToken
		});

		const last_modified = new Date(user.updated_at).toUTCString();
		return { data, last_modified };
	}
}
