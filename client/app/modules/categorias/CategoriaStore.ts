import {action, observable, set} from "mobx";
import Api from "../../services/Api";

class CategoriaStore {
    _id: number;
    @observable _categoria: string;

    constructor(Categoria = null) {
        if (Categoria != null && Categoria) {
            set(this, Categoria);
        }
    }

    @action
    async eliminarCategoria() {
        try {
            let a = new Api();
            let data = await a.delete('categorias', {
                id: this._id,
            });
            return data.success;
        } catch (e) {
            return false;
        }
    }
}

export default CategoriaStore;