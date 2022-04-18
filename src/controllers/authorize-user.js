import enums from '../enums';
export default function makeAuthorizeUser({ userService, ServiceResponse, ServiceData }) {
	return async function authorizeUser(req) {
		const response = new ServiceResponse();
		try {
			const { token } = req.body;
			if (!token) throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };

			const verified = await authorize(token);
			const resBody = new ServiceData(verified, enums.REASON_PHRASES.OK);
			const status = enums.STATUS_CODES.OK;

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
	 * Login user
	 * @param {String} first_name
	 * @param {String} last_name
	 * @param {String} email
	 * @param {String} password
	 */
	async function authorize(token) {
		const data = await userService.authorize(token);
		return data;
	}
}
