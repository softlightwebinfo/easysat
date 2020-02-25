import {Request, Response} from "@codeunic/api";
import {verifyJWTToken} from "../libs/Auth";

export function auth(req: Request, res: Response, next) {
    let token = req.headers['authentication'];
    if (token) {
        if (token.startsWith('JWT ')) {
            token = token.slice(4, token.length);
        }
    }
    verifyJWTToken(token)
        .then((decodedToken) => {
            req.user = decodedToken.data;
            req.token = token;
            req.tokenExpire = false;
            req.tokenEmpty = false;
            next()
        })
        .catch((err) => {
            req.user = null;
            req.token = null;
            if (!token) {
                req.tokenEmpty = true;
            } else {
                req.tokenExpireDate = err.expiredAt;
                req.tokenExpire = true;
            }
            next()
        })
}