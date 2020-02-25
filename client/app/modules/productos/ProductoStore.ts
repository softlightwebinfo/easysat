import {action, observable, set} from "mobx";
import Api from "../../services/Api";

class ProductoStore {
    @observable _id: number;
    @observable _referencia: string;
    @observable _nombre: string;
    @observable _precio: number;
    @observable _fk_categoria: number;

    constructor(Producto = null) {
        if (Producto) {
            set(this, Producto);
        }
    }

    @action
    async eliminarProducto() {
        try {
            let a = new Api();
            let data = await a.delete('productos', {
                id: this._id,
            });
            return data.success;
        } catch (e) {
            return false;
        }
    }
}

export default ProductoStore;