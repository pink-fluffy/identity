const bcrypt = require('bcrypt');
const Model = require('../../models');
const Util = require('../../util');
const Types = require('../../responseTypes');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

/**
 * Register a new user of role CUSTOMER with given information
 * @param {String} first_name 
 * @param {String} last_name 
 * @param {String} email 
 * @param {String} password 
 * @returns {Types.Response} response
 */
async function register(first_name, last_name, email, password) {
    var response = new Types.Response();

    // TODO: Validate input
    const validation = true;
    if (!validation) {
        response.status = StatusCodes.BAD_REQUEST;
        response.err_code = 9000;
        response.message = "Validation error message";
    }
    // Check for duplicate user
    const duplicateUser = await Model.User.findByEmail(email);
    if (duplicateUser) {
        response.status = StatusCodes.CONFLICT;
        response.err_code = 9009
        response.message = "User already exists";
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Model.User.register(first_name, last_name, email, hashedPassword);
        const accessToken = Util.Auth.createAccessToken(user.id, user.email);

        response.data = new Types.User.RegisterResponse(user.full_name, user.email, accessToken);
        response.status = StatusCodes.CREATED;
        response.message = ReasonPhrases.CREATED;
    }

    return response;
}

module.exports = register;