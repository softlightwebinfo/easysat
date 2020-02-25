import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody, Put, Delete} from "@codeunic/api";
import {ProductosService} from "../services/ProductosService";
import {CategoriasService} from "../services/CategoriasService";
import {Usuario} from "../model/Usuario";
import {UsuariosService} from "../services/UsuariosService";
import {error400} from "../errors/error400";
import {Categoria} from "../model/Categoria";
import {Producto} from "../model/Producto";


@Controller
@Route("/categorias")
class CategoriasController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        let p = new CategoriasService();
        res.status(200).json({
            categorias: await p.getCategorias(req.query.limitStart, req.query.limitEnd)
        })
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new CategoriasService();
            let Cat = new Categoria();
            Cat.categoria = body.categoria;
            let sett = await app.createCategoria(Cat, Number(req.user._id));
            return res.status(200).json({
                categoria: sett
            });
        } else {
            return error400(req, res);
        }
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new CategoriasService();
            return res.status(200).json({
                categoria: await p.getCategoria(Number(req.params.id))
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new CategoriasService();
            let Cat = new Categoria();
            Cat.id = Number(req.params.id);
            Cat.categoria = body.categoria;
            let create = {};
            let id = await app.updateCategoria(Cat);
            let UserNew = await app.getCategoria(Number(id));
            create = {
                categoria: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteCategoria(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Servi = new CategoriasService();
            let obj = new Categoria();
            obj.id = body.id;
            let delet = await Servi.deleteCategoria(obj);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 