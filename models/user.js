const mongoose = require('mongoose');
const Schema = require('../schema')
const DAO = require('../dao');

const userSchema = Schema.User;
userSchema.loadClass(DAO.User);

module.exports = mongoose.model('User', userSchema);