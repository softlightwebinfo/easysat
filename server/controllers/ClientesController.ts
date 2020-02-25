import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody, Put, Delete} from "@codeunic/api";
import {Usuario} from "../model/Usuario";
import {ClientesService} from "../services/ClientesService";
import {UsuariosService} from "../services/UsuariosService";
import {error400} from "../errors/error400";
import {Cliente} from "../model/Cliente";
import {passwordGenerate} from "../libs/Auth";
import {User} from "../model/User";


@Controller
@Route("/clientes")
class ClientesController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        let p = new ClientesService();
        res.status(200).json({
            clientes: await p.getClientes(req.query.limitStart, req.query.limitEnd)
        })
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new ClientesService();
            let User = new Cliente();
            User.nombre = body.nombre;
            let create = {};
            let id = await app.createCliente(User, Number(req.user._id));
            let UserNew = await app.getCliente(id);
            create = {
                cliente: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new ClientesService();
            return res.status(200).json({
                cliente: await p.getCliente(Number(req.params.id))
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new ClientesService();
            let User = new Cliente();
            User.id = Number(req.params.id);
            User.nombre = body.nombre;

            let create = {};
            let id = await app.updateCliente(User);
            let UserNew = await app.getCliente(id);
            create = {
                cliente: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteCliente(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Us = new ClientesService();
            let user = new Cliente();
            user.id = body.id;
            let delet = await Us.deleteCliente(user);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 