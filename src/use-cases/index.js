import makeCreateUser from './create-user';
import { CreateData } from './create-user';
import { ServiceResponse, ServiceData } from './service-response';
import usersDb from '../data-access';
import { hash, compareHash } from '../util';
import makeLoginUser from './login-user';
import { LoginData } from './login-user';
const createUser = makeCreateUser({ usersDb, hash });
const loginUser = makeLoginUser({ usersDb, compareHash });
const userService = Object.freeze({
	create: createUser,
	login: loginUser
});
export default userService;
export { ServiceResponse, ServiceData, CreateData, LoginData };
