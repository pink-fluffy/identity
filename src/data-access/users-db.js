export default function makeUsersDb({ makeDb, userModel }) {
	return Object.freeze({
		findByEmail,
		insert
	});

	async function findByEmail(email) {
		const db = await makeDb();
		const result = await userModel.findByEmail({ email });
		return result;
	}

	async function insert(user) {
		const db = await makeDb();
		const result = await userModel.register(user);
		return result;
	}
}
