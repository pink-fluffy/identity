/**
 * Build make user function
 * @param {*} validator
 * @returns
 */
export default function buildMakeUser(validator) {
	/** Make user object
	 */
	return function makeUser({
		email,
		password,
		role,
		first_name,
		last_name,
		phone,
		address,
		cart_items,
		orders,
		created_at = Date.now(),
		updated_at = Date.now()
	} = {}) {
		let error = validator({ email, password, role, first_name, last_name });
		if (error.status != 200) throw error;

		return Object.freeze({
			getFirstName: () => first_name,
			getLastName: () => last_name,
			getEmail: () => email,
			getPassword: () => password,
			getRole: () => role,
			getPhone: () => phone,
			getAddress: () => address,
			getCartItems: () => cart_items,
			getOrders: () => orders,
			getCreatedAt: () => created_at,
			getUpdatedAt: () => updated_at
		});
	};
}
