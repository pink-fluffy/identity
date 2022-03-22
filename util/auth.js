const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const accessTokenExpiry = '1h';

/**
 * Create an access token
 * @param id User's ID
 * @param phone User's email
 */
function createAccessToken(id, email) {
    return jwt.sign({ userId: id, email: email }, JWT_ACCESS_SECRET, {
        expiresIn: accessTokenExpiry,
    });
}

module.exports = { createAccessToken };