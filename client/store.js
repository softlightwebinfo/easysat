import {action, observable, extendObservable} from 'mobx'

import AuthStore from "./app/stores/AuthStore";
import UiStore from "./app/stores/UiStore";
import LanguajeStore from "./app/stores/LanguajeStore";
import Logs from './app/libs/Logs';
import UsuariosStore from "./app/modules/usuarios/UsuariosStore";
import CategoriasStore from "./app/modules/categorias/CategoriasStore";
import ProductosStore from "./app/modules/productos/ProductosStore";
import RolesStore from "./app/modules/roles/RolesStore";
import ReparacionesStore from "./app/modules/reparaciones/ReparacionesStore";
import ClientesStore from "./app/modules/clientes/ClientesStore";
import EstadisticasStore from "./app/modules/estadisticas/EstadisticasStore";
import objectAssign from 'object-assign';
import EmpresasStore from "./app/modules/empresas/EmpresasStore";

const isServer = typeof window === 'undefined';
let store = null;

/*
* Este Store es la aplicacion principal
* Los Stores estan en la carpeta /app/stores
* Los Stores se cargan en el constructor
* */
class Store {
    @observable lastUpdate = 0;
    @observable light = false;

    constructor(Server, lastUpdate) {
        this.lastUpdate = lastUpdate;
        this.Auth = new AuthStore(Server);
        this.Ui = new UiStore(Server);
        this.Languaje = new LanguajeStore(Server);
        this.Usuarios = new UsuariosStore(Server, {
            Auth: this.Auth
        });
        this.Categorias = new CategoriasStore(Server, {
            Auth: this.Auth
        });
        this.Productos = new ProductosStore(Server, {
            Auth: this.Auth
        });
        this.Roles = new RolesStore(Server, {
            Auth: this.Auth
        });
        this.Clientes = new ClientesStore(Server, {
            Auth: this.Auth
        });
        this.Empresas = new EmpresasStore(Server, {
            Auth: this.Auth
        });
        this.Estadisticas = new EstadisticasStore(Server, {
            Auth: this.Auth
        });
        this.Reparaciones = new ReparacionesStore(Server);
        // Logs.sendLogServer("Esto es el mensaje de prueba");
    }

    @action start = () => {
        this.timer = setInterval(() => {
            this.lastUpdate = Date.now();
            this.light = true;
        }, 1000)
    };

    stop = () => clearInterval(this.timer)
}

export function initializeStore(Server, lastUpdate = Date.now()) {
    if (isServer) {
        // console.log('Server', Server);
        return new Store(Server, lastUpdate)
    } else {
        // console.log('Client', Server);
        if (store === null) {
            store = new Store(Server, lastUpdate)
        }
        return store
    }
}