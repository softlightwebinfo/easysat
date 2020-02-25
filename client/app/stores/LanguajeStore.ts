import {action, observable} from "mobx";
import {Config} from "../settings/config";

export default class LanguajeStore {
    private languajes: any = [
        "es",
        "en"
    ];
    @observable private lang = this.languajes.find(i => i == Config.lang);
    @observable data: object = {};
    constructor() {
        this.loadFiles();
    }

    changeLang(lang: string) {
        this.lang = lang;
        this.loadFiles();
    }
    public translate(ky: string) {
        try {
            let keys = Object.keys(this.data);
            let index = keys.findIndex(i => i == ky);
            if (index > -1) {
                return this.data[keys[index]];
            } else {
                return ky;
            }
        } catch (e) {
            console.error(e);
        }
    }

    @action
    loadFiles() {
        try {
            var data = require(`../settings/lang/${this.lang}.json`);
            this.data = data;
        } catch (e) {
            console.error(e);
        }
    }
}