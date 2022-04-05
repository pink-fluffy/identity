import makeLoginUser from './login-user';
import makeCreateUser from './create-user';
import userService from '../use-cases';
import { ServiceResponse, ServiceData } from '../use-cases';
import makeAuthorizeUser from './authorize-user';

const postUser = makeCreateUser({ userService, ServiceResponse, ServiceData });
const loginUser = makeLoginUser({ userService, ServiceResponse, ServiceData });
const authorizeUser = makeAuthorizeUser({ userService, ServiceResponse, ServiceData });

const userController = Object.freeze({
	post: postUser,
	login: loginUser,
	authorize: authorizeUser
});

export default userController;
