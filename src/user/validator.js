import enums from '../enums';
/**
 *
 * @param {*} user
 */
export default function validator(user) {
	const validationError = {
		status: enums.ERRORS.INVALID_INPUT.status,
		message: enums.ERRORS.INVALID_INPUT.message
	};
	return { status: enums.STATUS_CODES.OK, message: '' };
}
