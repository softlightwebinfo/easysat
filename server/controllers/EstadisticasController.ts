import {Controller, Get, Route, Response, Request} from "@codeunic/api";
import {error400} from "../errors/error400";
import {UsuariosService} from "../services/UsuariosService";
import {Estadistica} from "../model/Estadistica";
import {ProductosService} from "../services/ProductosService";
import {CategoriasService} from "../services/CategoriasService";
import {RolesService} from "../services/RolesService";
import {ClientesService} from "../services/ClientesService";
import {EmpresasService} from "../services/EmpresasService";

@Controller
@Route("/estadisticas")
class EstadisticasController {

    constructor(req: Request, res: Response) {

    }

    @Get("/")
    async getAll(req: Request, res: Response) {
        if (req.user) {
            let usuarios = new UsuariosService();
            let productos = new ProductosService();
            let categorias = new CategoriasService();
            let roles = new RolesService();
            let clientes = new ClientesService();
            let empresas = new EmpresasService();
            let datos = [
                new Estadistica('usuarios', 'Usuarios', await usuarios.count()),
                new Estadistica('productos', 'Productos', await productos.count()),
                new Estadistica('categorias', 'Categorias', await categorias.count()),
                new Estadistica('roles', 'Roles', await roles.count()),
                new Estadistica('clientes', 'Clientes', await clientes.count()),
                new Estadistica('empresas', 'Empresas', await empresas.count())
            ];
            res.status(200).json({
                estadisticas: datos
            });
        }
        return error400(req, res);
    }
}
