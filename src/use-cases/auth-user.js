import enums from '../enums';
/**
 *
 * @param {*} usersDb
 * @returns
 */
export default function makeAuthorizeUser({ usersDb, auth }) {
	/**
	 * Authorize user
	 * @param {string} first_name - First Name
	 * @param {string} last_name - Last Name
	 */
	return async function authorizeUser(token) {
		const user = auth.verifyAccessToken(token);

		const data = new AuthorizeData(user.email, user.authorized);

		return data;
	};
}

class AuthorizeData {
	constructor(email, isAuthorized) {
		this.email = email;
		this.authorized = isAuthorized;
	}
}
