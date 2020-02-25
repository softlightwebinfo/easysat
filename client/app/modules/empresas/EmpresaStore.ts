import {action, computed, observable, set} from "mobx";
import moment from 'moment';
import Api from "../../services/Api";

class EmpresaStore {
    @observable _id: number;
    @observable _nombre: string;
    @observable _dni: string;
    @observable _direccion: string;
    @observable _fecha_nacimiento: string;
    @observable _fecha_creacion: string;
    @observable _fk_empresa: string;
    @observable _telefonos: string[] = [];

    constructor(Empresa = null) {
        if (Empresa) {
            set(this, Empresa);
        }
    }

    @computed get fechaCreacion() {
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

    @action
    async eliminarEmpresa() {
        try {
            let a = new Api();
            let data = await a.delete('empresas', {
                id: this._id,
            });
            return data.success;
        } catch (e) {
            return false;
        }
    }
}

export default EmpresaStore;