import bcrypt from 'bcrypt';

/**
 * Hash function
 * @param string
 */
function hash(string) {
	const hashedResult = bcrypt.hashSync(string, 10);
	return hashedResult;
}

/**
 * Compare hash with source
 * @param {string} source
 * @param {string} hashed
 * @returns
 */
function compare(source, hashed) {
	return bcrypt.compareSync(source, hashed);
}
export { hash, compare };
