import makeUser from '../user';
import enums from '../enums';
/**
 *
 * @param {*} usersDb
 * @returns
 */
export default function makeCreateUser(usersDb) {
	/**
	 * Check for duplicate user and invoke usersDB insert method
	 * @param {Object} userInfo
	 * @property {string} first_name - First Name
	 * @property {string} last_name - Last Name
	 * @property {string} email - Email
	 * @property {string} password - Hashed Password
	 */
	return async function createUser(userInfo) {
		const user = makeUser(userInfo);
		const exists = await usersDb.findByEmail(user.getEmail());
		if (exists) {
			throw { code: enums.ERRORS.DUPLICATE_USER.code, message: enums.ERRORS.DUPLICATE_USER.message };
		}

		return usersDb.insert({
			email: user.getEmail(),
			password: user.getPassword(),
			role: user.getRole(),
			first_name: user.getFirstName(),
			last_name: user.getLastName()
		});
	};
}

class CreateData {
	constructor(name, email, accessToken) {
		this.name = name;
		this.email = email;
		this.accessToken = accessToken;
		this.refreshToken = null;
	}
}

export { CreateData };