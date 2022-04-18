import enums from '../enums';
/**
 *
 * @param {*} usersDb
 * @returns
 */
export default function makeGetUser({ usersDb }) {
	/**
	 */
	return async function getUser(id) {
		const user = await usersDb.findById(id);

		if (!user) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}

		return user;
	};
}
