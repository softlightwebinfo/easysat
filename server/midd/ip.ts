import {Request, Response} from "@codeunic/api";

const requestIp = require('request-ip');

export function ip(req: Request, res: Response, next) {
    const clientIp = requestIp.getClientIp(req);
    req.userIp = clientIp;
    next();
}