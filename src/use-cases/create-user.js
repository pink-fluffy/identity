import makeUser from '../user';
import enums from '../enums';
/**
 *
 * @param {*} usersDb
 * @returns
 */
export default function makeCreateUser({ usersDb, hash, auth }) {
	/**
	 * Check for duplicate user and invoke usersDB insert method
	 * @param {Object} userInfo
	 * @property {string} first_name - First Name
	 * @property {string} last_name - Last Name
	 * @property {string} email - Email
	 * @property {string} password - Hashed Password
	 */
	return async function createUser(userInfo) {
		userInfo.password = hash(userInfo.password);
		const user = makeUser(userInfo);
		const exists = await usersDb.findByEmail(user.getEmail());
		if (exists) {
			throw { status: enums.ERRORS.DUPLICATE_USER.status, message: enums.ERRORS.DUPLICATE_USER.message };
		}

		const createdUser = usersDb.insert({
			email: user.getEmail(),
			password: user.getPassword(),
			role: user.getRole(),
			first_name: user.getFirstName(),
			last_name: user.getLastName(),
			created_at: user.getCreatedAt(),
			updated_at: user.getUpdatedAt()
		});

		const accessToken = auth.createAccessToken(createdUser.id, createdUser.email);

		const data = new CreateData({
			id: createdUser.id,
			full_name: createdUser.full_name,
			email: createdUser.email,
			accessToken: accessToken
		});

		return data;
	};
}

class CreateData {
	constructor(createdUser) {
		this.id = createdUser.id;
		this.name = createdUser.full_name;
		this.email = createdUser.email;
		this.accessToken = createdUser.accessToken;
		this.refreshToken = null;
	}
}
