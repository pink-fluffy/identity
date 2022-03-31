import mongoose from 'mongoose';
import enums from '../enums/';
import types from './users-types';

const schema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		enum: Object.values(enums.ROLES),
		default: enums.ROLES.CUSTOMER,
		required: true
	},
	phone: String,
	first_name: {
		type: String,
		required: true
	},
	last_name: String,
	address: types.Address,
	cart_items: [types.CartItem],
	orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
	created_at: { type: Date, default: Date.now() },
	updated_at: { type: Date, default: Date.now() }
});

export default schema;
