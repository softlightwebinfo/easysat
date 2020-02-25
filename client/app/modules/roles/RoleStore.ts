import {action, observable, set} from "mobx";
import Api from "../../services/Api";

class RoleStore {
    @observable _role: string;

    constructor(Role = null) {
        if (Role) {
            set(this, Role);
        }
    }

    @action
    async eliminarRole() {
        try {
            let a = new Api();
            let data = await a.delete('roles', {
                role: this._role,
            });
            return data.success;
        } catch (e) {
            return false;
        }
    }
}

export default RoleStore;