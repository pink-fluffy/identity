import makeCreateUser from './create-user';
import { ServiceResponse, ServiceData } from './service-response';
import usersDb from '../data-access';
import { hash, compareHash } from '../util';
import makeLoginUser from './login-user';
import auth from '../auth';

const createUser = makeCreateUser({ usersDb, hash, auth });
const loginUser = makeLoginUser({ usersDb, compareHash, auth });

const userService = Object.freeze({
	create: createUser,
	login: loginUser
});
export default userService;
export { ServiceResponse, ServiceData };
