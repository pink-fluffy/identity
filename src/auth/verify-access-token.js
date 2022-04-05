import enums from '../enums';

const config = process.env;

/**
 * Build verifyAccessToken function
 * @param {*} jwt
 * @returns
 */
export default function buildVerifyAccessToken(jwt) {
	/**
	 * Verify an access token
	 * @param email User's email
	 * @param token User's token
	 */
	return function verifyAccessToken(token) {
		var authorized = false;
		var email = '';
		jwt.verify(token, config.JWT_ACCESS_SECRET, function (err, decoded) {
			if (err) {
				throw { status: enums.STATUS_CODES.UNAUTHORIZED, message: enums.REASON_PHRASES.UNAUTHORIZED };
			}
			//if (decoded.userId === id && decoded.email === email)
			email = decoded.email;
			authorized = true;
		});
		return { email, authorized };
	};
}
