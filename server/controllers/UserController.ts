import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody} from "@codeunic/api";
import {ProductosService} from "../services/ProductosService";
import {UserService} from "../services/UserService";


@Controller
@Route("/user")
class UserController {
    constructor() {
    }

    @Get("/login")
    async getAll(req: Request, res: Response) {
        let {
            email,
            password
        } = req.query;
        let p = new UserService();
        let login = await p.login(email, password, req.userIp);
        res.status(200).json(login);

    }
} 