import {action, observable} from "mobx";
import UserStore from "./UserStore";
// import objectAssign from 'object-assign';
import Api from "../services/Api";
import Cookies from 'js-cookie';
import {Router} from '../../routes';

export default class AuthStore {
    @observable isLogin: boolean = false;
    @observable User: UserStore = new UserStore();
    @observable loader: boolean = false;

    constructor(Auth = null) {
        if (Auth != null && Auth) {
            this.setter(Auth.Auth);
        }
    }

    @action
    async login(email: string, password: string) {
        this.loader = true;
        let api = new Api();
        let data = await api.get(`user/login?email=${email}&password=${password}`);
        if (data) this.loader = false;
        if (data._loginError == 0 && data._token.length > 0 && data._id > 0) {
            let User = new UserStore();
            User.token = data._token;
            User.nombre = data._nombre;
            User.email = data._email;
            User.role = data._fk_role;
            User.id = data._id;
            this.User = User;
            this.isLogin = true;
            Cookies.set('user', JSON.stringify(this), {expires: 1});
        } else {
            console.log('error Login');
            // this.isLogin = false;
            // this.User = null;
        }
    }

    @action
    startCookieLogin(Auth) {
        if (Auth) {
            this.isLogin = Auth.isLogin;
            this.User = new UserStore(Auth.User);
        }
    }

    private setter(Auth) {
        this.isLogin = Auth.isLogin;
        this.loader = Auth.loader;
        this.User = new UserStore(Auth.User);
        // console.log(Auth.User.token);
    }

    @action
    logout() {
        Cookies.remove('user');
        this.isLogin = false;
        this.User = new UserStore();
        Router.pushRoute('login');
    }
}