import jsonwebtoken from 'jsonwebtoken';
import buildCreateAccessToken from './access-token';
import buildVerifyAccessToken from './verify-access-token';

const createAccessToken = buildCreateAccessToken(jsonwebtoken);
const verifyAccessToken = buildVerifyAccessToken(jsonwebtoken);

const auth = Object.freeze({
	createAccessToken: createAccessToken,
	verifyAccessToken: verifyAccessToken
});
export default auth;
