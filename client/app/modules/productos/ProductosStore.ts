import {action, observable} from "mobx";
import ProductoStore from "./ProductoStore";
import Api from "../../services/Api";
import {limit} from './config.json';

class ProductosStore {
    @observable productos: ProductoStore[] = [];
    @observable producto: ProductoStore = null;
    @observable saveLoader: boolean = false;

    public Store;

    constructor(Productos = null, Store = {}) {
        this.Store = Store;
        if (Productos != null && Productos) {
            this.setter(Productos.Productos);
            this.producto = new ProductoStore();
            if (Productos.Productos.producto) {
                this.producto._nombre = Productos.Productos.producto._nombre;
                this.producto._id = Productos.Productos.producto._id;
                this.producto._fk_categoria = Productos.Productos.producto._fk_categoria;
                this.producto._precio = Productos.Productos.producto._precio;
                this.producto._referencia = Productos.Productos.producto._referencia;
            }
        }
    }

    @action
    async getAll(limitStart = 0) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('productos', limitStart, limit);
            if (data.productos) {
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
        this.productos = [];
        data.productos.map((item) => {
            // console.log(item);
            let Prod = new ProductoStore();
            Prod._id = item._id;
            Prod._fk_categoria = item._fk_categoria;
            Prod._nombre = item._nombre;
            Prod._precio = item._precio;
            Prod._referencia = item._referencia;
            this.productos.push(Prod);
        });
    }

    async registrar(producto: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('productos', producto);
            if (data.producto) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.producto);
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
            let data = await api.get(`productos/${id}`);
            if (data.producto) {
                let Prod = new ProductoStore(data.producto);
                this.producto = Prod;
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
    async modificar(producto: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`productos/${this.producto._id}`, producto);
            if (data.producto) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.producto);
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
    async deleteProducto(id) {
        let ind = this.productos.findIndex(i => i._id == id);
        let a = this.productos.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default ProductosStore;