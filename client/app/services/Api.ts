// import 'isomorphic-fetch';
import fetch from 'isomorphic-unfetch';
import {Config} from "../settings/config";
import {observable} from "mobx";

class Api {
    private ruta: string = '';
    @observable static accessToken: string = '';

    constructor() {
        this.ruta = Config.rutaApi;
    }

    private rutaApi(ruta: string) {
        return `${this.ruta}${ruta}`;
    }

    private headers(body = false) {
        let post = {};
        if (body) {
            post = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }
        return {
            headers: {
                Authentication: `JWT ${Api.accessToken}`,
                ...post
            }
        }
    }

    public async getAll(ruta: string) {
        return await fetch(this.rutaApi(ruta), this.headers());
    }

    public async get(ruta: string) {
        let data = await fetch(this.rutaApi(ruta), this.headers());
        let json = await data.json();
        return json;
    }

    public async getAllLimit(ruta: string, limitStart: number, limitEnd: number = 30) {
        let data = await fetch(this.rutaApi(ruta) + `?limitStart=${limitStart}&limitEnd=${limitEnd}`, this.headers());
        let json = await data.json();
        return json;
    }

    public async post(ruta: string, usuario: object) {
        let headers = this.headers(true);
        let data = await fetch(this.rutaApi(ruta), {
            method: 'post',
            ...headers,
            body: JSON.stringify(usuario)
        });
        let json = await data.json();
        return json;
    }

    async put(ruta: string, usuario: object) {
        let headers = this.headers(true);
        let data = await fetch(this.rutaApi(ruta), {
            method: 'put',
            ...headers,
            body: JSON.stringify(usuario)
        });
        let json = await data.json();
        return json;
    }

    async delete(ruta: string, obj: object) {
        let headers = this.headers(true);
        let data = await fetch(this.rutaApi(ruta), {
            method: 'DELETE',
            ...headers,
            body: JSON.stringify(obj)
        });
        let json = await data.json();
        return json;
    }
}

export default Api;