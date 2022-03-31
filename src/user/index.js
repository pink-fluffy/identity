import buildMakeUser from './user';
import validator from './validator';

const makeUser = buildMakeUser(validator);

export default makeUser;
