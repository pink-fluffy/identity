import mongoose from 'mongoose';

const CartItem = {
	product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
	quantity: { type: Number, min: 0 }
};

const Address = {
	street: { type: String },
	unit: String,
	city: { type: String },
	state: { type: String },
	postal_code: { type: String },
	country: { type: String }
};

export default { Address, CartItem };
