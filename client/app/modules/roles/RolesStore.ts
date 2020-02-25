import {action, observable} from "mobx";
import RoleStore from "./RoleStore";
import Api from "../../services/Api";
import {limit} from './config.json';

class RolesStore {
    @observable roles: RoleStore[] = [];
    @observable role: RoleStore = null;
    @observable saveLoader: boolean = false;
    public Store;

    constructor(Roles = null, Store) {
        this.Store = Store;
        if (Roles != null && Roles) {
            this.setter(Roles.Roles);
            this.role = new RoleStore(Roles.Roles.role);
        }
    }

    @action
    async getAll(limitStart = 0, limitEnd = limit) {
        let api = new Api();
        try {
            let data = await api.getAllLimit('roles', limitStart, limitEnd);
            if (data.roles) {
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
        this.roles = [];
        data.roles.map((item) => {
            // console.log(item);
            let Rol = new RoleStore();
            Rol._role = item._role;
            this.roles.push(Rol);
        });
    }

    async registrar(roles: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.post('roles', roles);
            if (data.role) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.role);
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
    async get(role: string) {
        let api = new Api();
        try {
            let data = await api.get(`roles/${role}`);
            if (data.role) {
                let Prod = new RoleStore(data.role);
                this.role = Prod;
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
    async modificar(role: object, callback: Function) {
        let api = new Api();
        try {
            this.saveLoader = true;
            let data = await api.put(`roles/${this.role._role}`, role);
            if (data.role) {
                // this.addUsuarioInStore(data.usuario);
                this.activarSaveLoader(false, () => {
                    callback(data.role);
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
    async deleteRole(id) {
        let ind = this.roles.findIndex(i => i._role == id);
        let a = this.roles.splice(ind, 1);
        return {
            success: a ? true : false
        }
    }
}

export default RolesStore;