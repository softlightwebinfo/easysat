import {action, observable} from "mobx";
import CategoriaStore from "./CategoriaStore";
import Api from "../../services/Api";
import {limit} from './config.json';

class CategoriasStore {
    @observable categorias: CategoriaStore[] = [];
    @observable categoria: CategoriaStore = null;
    @observable saveLoader: boolean = false;
    public Store;

    constructor(Categorias = null, Store = {}) {
        this.Store = Store;
        if (Categorias != null && Categorias) {
            this.setter(Categorias.Categorias);
            this.categoria = new CategoriaStore(Categorias.Categorias.categoria);
        }
    }

    @action
    async getAll(limitStart = 0) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('categorias', limitStart, limit);
            if (data.categorias) {
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

    private setter(data: any) {
        this.categorias = [];
        data.categorias.map((item) => {
            // console.log(item);
            let Cat = new CategoriaStore();
            Cat._id = item._id;
            Cat._categoria = item._categoria;
            this.categorias.push(Cat);
        });
    }

    async registrar(categoria: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('categorias', categoria);
            if (data.categoria) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.categoria);
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
            let data = await api.get(`categorias/${id}`);
            if (data.categoria) {
                let Prod = new CategoriaStore(data.categoria);
                this.categoria = Prod;
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
    async modificar(categoria: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`categorias/${this.categoria._id}`, categoria);
            if (data.categoria) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.categoria);
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
    async deleteCategoria(id) {
        let ind = this.categorias.findIndex(i => i._id == id);
        let a = this.categorias.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default CategoriasStore;