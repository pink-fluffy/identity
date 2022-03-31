import makeCreateUser from './create-user';
import userService from '../use-cases';
import { CreateData, ServiceResponse, ServiceData } from '../use-cases';
import { hash, createAccessToken } from '../util';

const postUser = makeCreateUser({ userService, CreateData, ServiceResponse, ServiceData, hash, createAccessToken });

const userController = Object.freeze({
	postUser
});

export default userController;
