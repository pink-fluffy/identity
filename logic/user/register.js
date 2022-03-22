const bcrypt = require('bcrypt');
const Model = require('../../models');
const Util = require('../../util');
const Types = require('../../responseTypes');

/**
 * Register a new user of role CUSTOMER with given information
 * @param {String} first_name 
 * @param {String} last_name 
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
async function register(first_name, last_name, email, password) {
    // TODO: Validate input
    const validation = true;
    if (!validation)
        return 400;

    // Check for duplicate user
    const duplicateUser = await Model.User.findByEmail(email);
    if (duplicateUser)
        return 409;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Model.User.register(first_name, last_name, email, hashedPassword);

    const accessToken = Util.Auth.createAccessToken(user.id, user.email);

    const response = new Types.User.RegisterResponse(user.full_name, user.email, accessToken);

    return JSON.stringify(response);
}

module.exports = register;