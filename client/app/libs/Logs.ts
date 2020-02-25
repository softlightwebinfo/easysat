import 'isomorphic-fetch';

export default class Logs {
    private file: string;
    private directory: string;

    constructor(file: string) {
        this.file = file;
        this.directory = `./logs/`;
    }

    async writeLog(body: string) {
        if (body.length) {

        }
    }

    static async sendLogServer(mensaje) {
        let form = JSON.stringify({
            mensaje: mensaje
        });
        let rs = await  fetch('/api/logs', {
            method: 'post',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: form
        });
        return rs;
    }

    get getDirectory() {
        return this.directory;
    }

    get getFile() {
        return this.file;
    }

    get getRuta() {
        return `${this.getDirectory}${this.getFile}`;
    }
}