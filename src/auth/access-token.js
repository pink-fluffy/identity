const accessTokenExpiry = '1h';
/**
 * Build createAccessToken function
 * @param {*} jwt
 * @returns
 */
export default function buildCreateAccessToken(jwt) {
	/**
	 * Create an access token
	 * @param id User's ID
	 * @param phone User's email
	 */
	return function createAccessToken(id, email) {
		return jwt.sign({ userId: id, email: email }, process.env.JWT_ACCESS_SECRET, {
			expiresIn: accessTokenExpiry
		});
	};
}
