import {observable} from "mobx";
import ReparacionStore from "./ReparacionStore";

class ReparacionesStore {
    @observable reparaciones: ReparacionStore[];

    constructor() {

    }
}

export default ReparacionesStore;