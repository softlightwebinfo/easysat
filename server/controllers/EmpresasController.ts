import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody, Put, Delete} from "@codeunic/api";
import {Usuario} from "../model/Usuario";
import {ClientesService} from "../services/ClientesService";
import {UsuariosService} from "../services/UsuariosService";
import {error400} from "../errors/error400";
import {Cliente} from "../model/Cliente";
import {EmpresasService} from "../services/EmpresasService";
import {Empresa} from "../model/Empresa";


@Controller
@Route("/empresas")
class EmpresasController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        let p = new EmpresasService();
        res.status(200).json({
            empresas: await p.getEmpresas(req.query.limitStart, req.query.limitEnd)
        })
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new EmpresasService();
            let User = new Empresa();
            User.nombre = body.nombre;
            User.cif = body.cif;
            let create = {};
            let id = await app.createEmpresa(User, Number(req.user._id));
            let UserNew = await app.getEmpresa(id);
            create = {
                empresa: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new EmpresasService();
            return res.status(200).json({
                empresa: await p.getEmpresa(Number(req.params.id))
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new EmpresasService();
            let Empr = new Empresa();
            Empr.id = Number(req.params.id);
            Empr.nombre = body.nombre;
            Empr.cif = body.cif;
            let create = {};
            let id = await app.updateEmpresa(Empr);
            let UserNew = await app.getEmpresa(id);
            create = {
                empresa: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteEmpresa(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Us = new EmpresasService();
            let user = new Empresa();
            user.id = body.id;
            let delet = await Us.deleteEmpresa(user);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 