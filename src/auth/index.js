import jsonwebtoken from 'jsonwebtoken';
import buildCreateAccessToken from './access-token';

const createAccessToken = buildCreateAccessToken(jsonwebtoken);

const auth = Object.freeze({
	createAccessToken: createAccessToken
});
export default auth;
