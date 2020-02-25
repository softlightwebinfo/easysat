import {action, observable} from "mobx";
import EstadisticaStore from "./EstadisticaStore";
import Api from "../../services/Api";

class EstadisticasStore {
    @observable estadisticas: EstadisticaStore[] = [];
    public Store;

    constructor(Estadisticas = null, Store = {}) {
        this.Store = Store;
        if (Estadisticas != null && Estadisticas) {
            this.setter(Estadisticas.Estadisticas);
        }
    }

    @action
    async getAll() {
        let api = new Api();
        try {
            let data = await api.get('estadisticas');
            if (data.estadisticas) {
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
    private setter(Estadisticas) {
        this.estadisticas = [];
        Estadisticas.estadisticas.map((item, index) => {
            this.estadisticas.push(new EstadisticaStore(item));
        })
    }
}

export default EstadisticasStore;