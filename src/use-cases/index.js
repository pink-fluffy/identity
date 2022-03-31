import makeCreateUser from './create-user';
import { CreateData } from './create-user';
import { ServiceResponse, ServiceData } from './service-response';
import usersDb from '../data-access';

const createUser = makeCreateUser(usersDb);

const userService = Object.freeze({
	create: createUser
});
export default userService;
export { ServiceResponse, ServiceData, CreateData };
