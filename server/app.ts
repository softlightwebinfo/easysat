import {Api} from '@codeunic/api';
import {ORM} from "./libs/ORM";

var bodyParser = require('body-parser')
const cors = require('cors');

ORM.connect('localhost', 'softlightweb', '123a4567b', 'softlightweb');

import "./controllers/homeController";
import "./controllers/UsuariosController";
import "./controllers/ProductosController";
import "./controllers/CategoriasController";
import "./controllers/RolesController";
import "./controllers/ClientesController";
import "./controllers/UserController";
import "./controllers/EmpresasController";
import "./controllers/EstadisticasController";
import {auth} from "./midd/auth";
import {ip} from "./midd/ip";

var helmet = require('helmet');
Api.configs = {
    use: [
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        auth,
        ip,
        cors(),
        helmet()
    ],
    set: []
};
Api.prepare();
Api.createServer(3001);