import bcrypt from 'bcrypt';

/**
 * Hash function
 * @param string
 */
async function hash(string) {
	const hashedResult = await bcrypt.hash(string, 10);
	return hashedResult;
}

export default hash;
