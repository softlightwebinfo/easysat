import {action, observable, set, toJS} from 'mobx';
import Api from "../services/Api";

export default class UserStore {
    @observable id: number = null;
    @observable nombre: string = '';
    @observable email: string = '';
    @observable role: string = '';
    @observable token: string;

    constructor(User = null) {
        if (User != null && User) {
            set(this, User);
            Api.accessToken = User.token;
        }
    }

    getJSON = () => toJS({
        id: this.id,
        role: this.role,
        nombre: this.nombre,
        email: this.email,
        token: this.token
    });

    @action
    async loadPerfil() {
        try {

        } catch (e) {

        }
    }
}