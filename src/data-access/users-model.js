import mongoose from 'mongoose';
import schema from './users-schema';
import UserDAO from './users-dao';

schema.loadClass(UserDAO);

const userModel = mongoose.model('User', schema);
export default userModel;
