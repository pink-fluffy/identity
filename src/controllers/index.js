import makeLoginUser from './login-user';
import makeCreateUser from './create-user';
import userService from '../use-cases';
import { CreateData, LoginData, ServiceResponse, ServiceData } from '../use-cases';
import { createAccessToken } from '../util';

const postUser = makeCreateUser({ userService, CreateData, ServiceResponse, ServiceData, createAccessToken });
const loginUser = makeLoginUser({ userService, LoginData, ServiceResponse, ServiceData, createAccessToken });

const userController = Object.freeze({
	post: postUser,
	login: loginUser
});

export default userController;
