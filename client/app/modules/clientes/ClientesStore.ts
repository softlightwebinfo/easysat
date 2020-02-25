import {action, observable} from "mobx";
import ClienteStore from "./ClienteStore";
import Api from "../../services/Api";
import {limit} from './config.json';

class ClientesStore {
    @observable clientes: ClienteStore[] = [];
    @observable cliente: ClienteStore = null;
    @observable saveLoader: boolean = false;
    public Store;

    constructor(Clientes = null, Store = {}) {
        this.Store = Store;
        if (Clientes != null && Clientes) {
            this.setter(Clientes.Clientes);
            this.cliente = new ClienteStore(Clientes.Clientes.cliente);
        }
    }

    @action
    async getAll(limitStart = 0) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('clientes', limitStart, limit);
            if (data.clientes) {
                this.setter(data);
            } else {
                if (data.tokenExpire) {
                    this.Store.Auth.logout();
                }
            }
        } catch (e) {
            console.log(e);
        }
        // this.setter(data);
    }

    @action
    setter(data: any) {
        this.clientes = [];
        data.clientes.map((item) => {
            // console.log(item);
            let Client = new ClienteStore();
            Client._id = item._id;
            Client._dni = item._dni;
            Client._direccion = item._direccion;
            Client._fecha_creacion = item._fecha_creacion;
            Client._fk_empresa = item._fk_empresa;
            Client._nombre = item._nombre;
            Client._telefonos = item._telefonos;
            this.clientes.push(Client);
        });
    }

    async registrar(cliente: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('clientes', cliente);
            if (data.cliente) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.cliente);
                });
            } else {
                this.saveLoader = false;
                if (data.tokenExpire) {
                    //MOSTRAR MODAL LOGOUT
                    this.Store.Auth.logout();
                } else if (data.tokenEmpty) {
                    this.Store.Auth.logout();
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    @action
    private activarSaveLoader(show, callback: Function) {
        setTimeout(() => {
            this.saveLoader = show;
            if (callback != undefined) callback();
        }, 800);
    }

    @action
    async get(id: number) {
        let api = new Api();
        try {
            let data = await api.get(`clientes/${id}`);
            if (data.cliente) {
                let User = new ClienteStore(data.cliente);
                this.cliente = User;
            } else {
                if (data.tokenExpire) {
                    //MOSTRAR MODAL LOGOUT
                    this.Store.Auth.logout();
                } else if (data.tokenEmpty) {
                    this.Store.Auth.logout();
                }
            }
        } catch (e) {
            console.log(e);
        }
        // this.setter(data);
    }

    @action
    async modificar(cliente: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`clientes/${this.cliente._id}`, cliente);
            if (data.cliente) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.cliente);
                });
            } else {
                this.saveLoader = false;
                if (data.tokenExpire) {
                    //MOSTRAR MODAL LOGOUT
                    this.Store.Auth.logout();
                } else if (data.tokenEmpty) {
                    this.Store.Auth.logout();
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    @action
    async deleteCliente(id) {
        let ind = this.clientes.findIndex(i => i._id == id);
        let a = this.clientes.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default ClientesStore;