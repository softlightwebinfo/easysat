import {observable, set} from "mobx";

class EstadisticaStore {
    @observable _key;
    @observable _nombre;
    @observable _valor;

    constructor(Estadistica = null) {
        if (Estadistica) {
            set(this, Estadistica);
        }
    }
}

export default EstadisticaStore;