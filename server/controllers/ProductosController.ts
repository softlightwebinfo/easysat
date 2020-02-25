import {Controller, Delete, Get, Post, Put, Request, RequestBody, Response, Route} from "@codeunic/api";
import {ProductosService} from "../services/ProductosService";
import {Producto} from "../model/Producto";
import {error400} from "../errors/error400";
import {Usuario} from "../model/Usuario";
import {UsuariosService} from "../services/UsuariosService";
import {passwordGenerate} from "../libs/Auth";
import {User} from "../model/User";


@Controller
@Route("/productos")
class ProductosController {
    constructor() {
    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        let p = new ProductosService();
        res.status(200).json({
            productos: await p.getProductos(req.query.limitStart, req.query.limitEnd)
        })
    }

    @Post('/')
    async registro(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new ProductosService();
            let Prod = new Producto();
            Prod.referencia = body.referencia;
            Prod.nombre = body.nombre;
            Prod.precio = body.precio;
            let sett = await app.createProducto(Prod, Number(req.user._id));
            return res.status(200).json({
                producto: sett
            });
        } else {
            return error400(req, res);
        }
    }

    @Get("/:id")
    async get(req: Request, res: Response) {
        if (req.user) {
            let p = new ProductosService();
            return res.status(200).json({
                producto: await p.getProducto(Number(req.params.id))
            })
        }
        return error400(req, res);
    }

    @Put('/:id')
    async modificar(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let app = new ProductosService();
            let Prod = new Producto();
            Prod.id = Number(req.params.id);
            Prod.nombre = body.nombre;
            Prod.referencia = body.referencia;
            Prod.precio = body.precio;
            let create = {};
            let id = await app.updateProducto(Prod);
            let UserNew = await app.getProducto(Number(id));
            create = {
                producto: UserNew
            };
            return res.status(200).json(create);
        }
        return error400(req, res);
    }

    @Delete('')
    async deleteProducto(req: Request, res: Response, @RequestBody body) {
        if (req.user) {
            let Pr = new ProductosService();
            let pro = new Producto();
            pro.id = body.id;
            let delet = await Pr.deleteProducto(pro);
            return res.status(200).json({
                success: delet
            });
        }
        return error400(req, res);
    }
} 