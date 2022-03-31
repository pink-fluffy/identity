import jwt from 'jsonwebtoken';

const accessTokenExpiry = '1h';

/**
 * Create an access token
 * @param id User's ID
 * @param phone User's email
 */
function createAccessToken(id, email) {
	return jwt.sign({ userId: id, email: email }, process.env.JWT_ACCESS_SECRET, {
		expiresIn: accessTokenExpiry
	});
}

export { createAccessToken };
