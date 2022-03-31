const ERRORS = {
	DUPLICATE_USER: {
		status: 409,
		message: 'User already exists'
	},
	INVALID_INPUT: {
		status: 400,
		message: 'Input is invalid'
	}
};

export default ERRORS;
