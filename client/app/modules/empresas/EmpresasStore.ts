import {action, observable} from "mobx";
import EmpresaStore from "./EmpresaStore";
import Api from "../../services/Api";
import {limit} from './config.json';
import ClienteStore from "../clientes/ClienteStore";

class EmpresasStore {
    @observable empresas: EmpresaStore[] = [];
    @observable empresa: EmpresaStore = null;
    @observable saveLoader: boolean = false;
    public Store;

    constructor(Empresas = null, Store = {}) {
        this.Store = Store;
        if (Empresas != null && Empresas) {
            this.setter(Empresas.Empresas);
            this.empresa = new EmpresaStore(Empresas.Empresas.empresa);
        }
    }

    @action
    async getAll(limitStart = 0) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('empresas', limitStart, limit);
            if (data.empresas) {
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
        this.empresas = [];
        data.empresas.map((item) => {
            // console.log(item);
            let Client = new EmpresaStore();
            Client._id = item._id;
            Client._dni = item._dni;
            Client._direccion = item._direccion;
            Client._fecha_creacion = item._fecha_creacion;
            Client._fk_empresa = item._fk_empresa;
            Client._nombre = item._nombre;
            Client._telefonos = item._telefonos;
            this.empresas.push(Client);
        });
    }

    async registrar(empresa: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('empresas', empresa);
            if (data.empresa) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.empresa);
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
            let data = await api.get(`empresas/${id}`);
            if (data.empresa) {
                let Empre = new EmpresaStore(data.empresa);
                this.empresa = Empre;
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
    async modificar(empresa: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`empresas/${this.empresa._id}`, empresa);
            if (data.empresa) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.empresa);
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
    async deleteEmpresa(id) {
        let ind = this.empresas.findIndex(i => i._id == id);
        let a = this.empresas.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default EmpresasStore;