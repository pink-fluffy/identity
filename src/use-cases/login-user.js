import enums from '../enums';
/**
 *
 * @param {*} usersDb
 * @returns
 */
export default function makeLoginUser({ usersDb, compareHash, auth }) {
	/**
	 * Verify credentials and login user
	 * @param {string} email - Email
	 * @param {string} password - password
	 */
	return async function loginUser(email, password) {
		const exists = await usersDb.findByEmail(email);
		// check account found and verify password
		if (!exists || !compareHash(password, exists.password)) {
			// authentication failed
			throw { status: enums.STATUS_CODES.UNAUTHORIZED, message: enums.REASON_PHRASES.UNAUTHORIZED };
		}

		// authentication successful
		const accessToken = auth.createAccessToken(exists.id, exists.email);

		const data = new LoginData(accessToken);

		return data;
	};
}

class LoginData {
	constructor(accessToken, refreshToken = null) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
