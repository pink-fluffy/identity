import enums from '../enums';
export default function makeCreateUser({
	userService,
	CreateData,
	ServiceResponse,
	ServiceData,
	hash,
	createAccessToken
}) {
	return async function createUser(body) {
		const response = new ServiceResponse();
		try {
			const { first_name, last_name, email, password } = body;
			if (!(first_name && last_name && email && password))
				throw { code: enums.ERRORS.INVALID_INPUT.code, message: enums.ERRORS.INVALID_INPUT.message };

			const created = await register(first_name, last_name, email, password);
			const resBody = new ServiceData(created.data, 0, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;

			response.body = resBody;
			response.status = status;
			response.last_modified = created.last_modified;
		} catch (err) {
			const resBody = new ServiceData(null, err.code, err.message);
			var status;
			if (err.code == enums.ERRORS.DUPLICATE_USER.code) status = enums.STATUS_CODES.CONFLICT;
			else if (err.code == enums.ERRORS.INVALID_INPUT.code) status = enums.STATUS_CODES.BAD_REQUEST;
			response.body = resBody;
			response.status = status;
		}
		return response;
	};

	/**
	 * Register a new user of role CUSTOMER with given information
	 * @param {String} first_name
	 * @param {String} last_name
	 * @param {String} email
	 * @param {String} password
	 * @returns {Types.Response} response
	 */
	async function register(first_name, last_name, email, password) {
		const hashedPassword = await hash(password);
		const userInfo = {
			first_name: first_name,
			last_name: last_name,
			email: email,
			password: hashedPassword
		};

		const user = await userService.create(userInfo);
		const accessToken = createAccessToken(user.id, user.email);

		const data = new CreateData(`${user.first_name} ${user.last_name}`, user.email, accessToken);

		const last_modified = new Date(user.updated_at).toUTCString();
		return { data, last_modified };
	}
}
