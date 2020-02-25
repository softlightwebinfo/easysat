import {observable, set, toJS, computed, action} from "mobx";
import moment from 'moment';
import Api from "../../services/Api";

export class UsuarioStore {
    @observable _id: number;
    @observable _nombre: string;
    @observable _email: string;
    @observable _fk_role: string;
    @observable _fecha_creacion: string;
    @observable _telefonos: string[] = [];

    constructor(Usuario = null) {
        if (Usuario && Usuario != null) {
            set(this, Usuario);
        }
    }

    @computed
    get fechaCreacion() {
        let m = moment(this._fecha_creacion);
        return m.format('DD/MM/YYYY HH:mm:ss')
    }

    @computed get firstTelefono() {
        if (this._telefonos.length) {
            return this._telefonos[0];
        } else {
            return '-';
        }
    }

    getJSON = () => toJS({
        _id: this._id,
        _nombre: this._nombre,
        _email: this._email,
        _fk_role: this._fk_role,
        _fecha_creacion: this._fecha_creacion,
        _telefonos: this._telefonos
    });

    @action
    async eliminarTodo() {
        alert(this._id);
    }

    @action
    async eliminarUsuario() {
        try {
            let a = new Api();
            let data = await a.delete('usuarios', {
                id: this._id,
            });
            return data.success;
        } catch (e) {
            return false;
        }
    }
}