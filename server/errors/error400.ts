import {Request, Response} from "@codeunic/api";

export function error400(req: Request, res: Response) {
    let json = {
        tokenEmpty: false,
        tokenExpire: false
    };
    if (!req.user) {
        json.tokenEmpty = req.tokenEmpty;
        json.tokenExpire = req.tokenExpire;
        return res.status(400).json(json);
    }
}