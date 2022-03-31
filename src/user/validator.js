import enums from '../enums';
/**
 *
 * @param {*} user
 */
export default function validator(user) {
	const validationError = {
		code: enums.ERRORS.INVALID_INPUT.code,
		message: enums.ERRORS.INVALID_INPUT.message
	};
	return { code: 0, message: '' };
}
