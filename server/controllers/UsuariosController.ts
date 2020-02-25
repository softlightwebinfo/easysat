import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody, Put, Delete} from "@codeunic/api";
import {Usuario} from "../model/Usuario";
import {UsuariosService} from "../services/UsuariosService";
import {error400} from "../errors/error400";
import {create} from "domain";
import {passwordGenerate} from "../libs/Auth";
import {User} from "../model/User";


@Controller
@Route("/usuarios")
class UsuariosController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        if (req.user) {
            let p = new UsuariosService();
            return res.status(200).json({
                usuarios: await p.getUsuarios(req.query.limitStart, req.query.limitEnd)
            })
        }
        return error400(req, res);
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new UsuariosService();
            let User = new Usuario();
            User.nombre = body.nombre;
            if (body.email.trim().length) {
                User.email = body.email;
            }
            if (body.password.trim().length) {
                User.password = await passwordGenerate(body.password);
            }
            let create = {};
            let isExistEmailUser = await app.existEmail(User.email);
            if (!isExistEmailUser) {
                let id = await app.createUsuario(User);
                let UserNew = await app.getUser(id);
                create = {
                    usuario: UserNew
                };
            }
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new UsuariosService();
            return res.status(200).json({
                usuario: await p.getUser(Number(req.params.id))
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new UsuariosService();
            let User = new Usuario();
            User.id = Number(req.params.id);
            User.nombre = body.nombre;
            if (body.email.trim().length) {
                User.email = body.email;
            }
            if (body.password.trim().length) {
                User.password = await passwordGenerate(body.password);
            }
            let create = {};
            let isExistEmailUser = await app.existEmail(User.email, User.id);
            if (!isExistEmailUser) {
                let id = await app.updateUsuario(User);
                let UserNew = await app.getUser(id);
                create = {
                    usuario: UserNew
                };
            }
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteUser(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Us = new UsuariosService();
            let user = new User();
            user.id = body.id;
            let delet = await Us.deleteUsuario(user);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 