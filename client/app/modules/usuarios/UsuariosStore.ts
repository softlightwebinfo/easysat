import {action, observable} from "mobx";
import {UsuarioStore} from "./UsuarioStore";
import Api from "../../services/Api";
import {limit} from './config.json';

class UsuariosStore {
    @observable usuarios: UsuarioStore[] = [];
    @observable usuario: UsuarioStore = null;
    private Store;
    @observable saveLoader: boolean = false;
    @observable saveClear: boolean = false;

    constructor(Usuarios = null, Store = {}) {
        this.Store = Store;
        if (Usuarios && Usuarios != null) {
            this.setter(Usuarios.Usuarios);
            this.usuario = new UsuarioStore();
            if (Usuarios.Usuarios.usuario) {
                this.usuario._nombre = Usuarios.Usuarios.usuario._nombre;
                this.usuario._id = Usuarios.Usuarios.usuario._id;
                this.usuario._email = Usuarios.Usuarios.usuario._email;
                this.usuario._fecha_creacion = Usuarios.Usuarios.usuario._fecha_creacion;
                this.usuario._fk_role = Usuarios.Usuarios.usuario._fk_role;
            }
        }
    }

    async getAll(limitStart = 0) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('usuarios', limitStart, limit);
            if (data.usuarios) {
                this.setter(data);
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
    async registrar(usuario: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('usuarios', usuario);
            if (data.usuario) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.usuario);
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
    async modificar(usuario: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`usuarios/${this.usuario._id}`, usuario);
            if (data.usuario) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.usuario);
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
            this.saveClear = true;
            if (callback != undefined) callback();
        }, 800);
    }

    @action
    setter(data) {
        this.usuarios = [];
        data.usuarios.map((item) => {
            // console.log(item);
            let User = new UsuarioStore();
            User._email = item._email;
            User._fecha_creacion = item._fecha_creacion;
            User._fk_role = item._fk_role;
            User._id = item._id;
            User._nombre = item._nombre;
            User._telefonos = item._telefonos;
            this.usuarios.push(User);
        });
    }

    private async addUsuarioInStore(item: any) {
        if (!this.usuarios.length) {
            await this.getAll();
            return;
        }
        let User = new UsuarioStore();
        User._email = item._email;
        User._fecha_creacion = item._fecha_creacion;
        User._fk_role = item._fk_role;
        User._id = item._id;
        User._nombre = item._nombre;
        this.usuarios.unshift(User);
    }

    @action
    async get(id: number) {
        let api = new Api();
        try {
            let data = await api.get(`usuarios/${id}`);
            if (data.usuario) {
                let User = new UsuarioStore();
                User._email = data.usuario._email;
                User._fecha_creacion = data.usuario._fecha_creacion;
                User._fk_role = data.usuario._fk_role;
                User._id = data.usuario._id;
                User._nombre = data.usuario._nombre;
                this.usuario = User;
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
    async deleteUsuario(id) {
        let ind = this.usuarios.findIndex(i => i._id == id);
        let a = this.usuarios.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default UsuariosStore;