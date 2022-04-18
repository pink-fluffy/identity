import enums from '../enums';
export default function makeGetUser({ userService, ServiceResponse, ServiceData }) {
	return async function getUser(req) {
		const id = req.params.id;
		console.log(id);
		const response = new ServiceResponse();
		try {
			const user = await get(id);
			const resBody = new ServiceData(user.data, enums.REASON_PHRASES.OK);
			const status = enums.STATUS_CODES.OK;
			response.body = resBody;
			response.status = status;
		} catch (err) {
			console.log(err);
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 * Get user by id
	 */
	async function get(id) {
		const user = await userService.get(id);

		if (!user) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}
		return { data: user };
	}
}
