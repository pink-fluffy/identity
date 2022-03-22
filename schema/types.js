const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItem = {
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, min: 0 },
};

const Address = {
    street: { type: String },
    unit: String,
    city: { type: String },
    state: { type: String },
    postal_code: { type: String },
    country: { type: String },
};

module.exports = { CartItem, Address };