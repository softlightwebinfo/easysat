import objectAssign from 'object-assign';

export default class UiStore {
    constructor(Auth = null) {
        if (Auth) {
            objectAssign(this, Auth.Ui);
        }
    }
}