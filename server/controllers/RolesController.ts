import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody, Put, Delete} from "@codeunic/api";
import {ProductosService} from "../services/ProductosService";
import {CategoriasService} from "../services/CategoriasService";
import {RolesService} from "../services/RolesService";
import {Categoria} from "../model/Categoria";
import {error400} from "../errors/error400";
import {Role} from "../model/Role";
import {Producto} from "../model/Producto";


@Controller
@Route("/roles")
class RolesController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        let p = new RolesService();
        res.status(200).json({
            roles: await p.getRoles(req.query.limitStart, req.query.limitEnd)
        })
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new RolesService();
            let Rol = new Role();
            Rol.role = body.role;
            let sett = await app.createRole(Rol, Number(req.user._id));
            return res.status(200).json({
                role: sett
            });
        } else {
            return error400(req, res);
        }
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new RolesService();
            return res.status(200).json({
                role: await p.getRole(req.params.id)
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new RolesService();
            let Cat = new Role();
            Cat.role = body.role;
            let create = {};
            let id = await app.updateRole(Cat, req.params.id);
            let UserNew = await app.getRole('' + id);
            create = {
                role: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteRole(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Pr = new RolesService();
            let pro = new Role();
            pro.role = body.role;
            let delet = await Pr.deleteRole(pro);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 