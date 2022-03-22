const Enums = require('../enums');
const Types = require('./types');

const mongoose = require('mongoose');

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
        enum: Object.values(Enums.User.ROLES),
        default: Enums.User.ROLES.CUSTOMER,
        required: true,
    },
    phone: String,
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    address: Types.Address,
    cart_items: [Types.CartItem],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
});

module.exports = { userSchema: schema };