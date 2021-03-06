import makeCreateUser from './create-user';
import { ServiceResponse, ServiceData } from './service-response';
import usersDb from '../data-access';
import { hash, compareHash } from '../util';
import makeLoginUser from './login-user';
import auth from '../auth';
import makeAuthorizeUser from './auth-user';
import makeGetUser from './get-user';

const createUser = makeCreateUser({ usersDb, hash, auth });
const loginUser = makeLoginUser({ usersDb, compareHash, auth });
const authorizeUser = makeAuthorizeUser({ usersDb, auth });
const getUser = makeGetUser({ usersDb });
const userService = Object.freeze({
	create: createUser,
	login: loginUser,
	authorize: authorizeUser,
	get: getUser
});
export default userService;
export { ServiceResponse, ServiceData };
