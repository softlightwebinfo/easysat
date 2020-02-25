export class Setting {
    public appName: string;
    public version: string;
    public rutaApi: string;
    public theme: string;
    public dev: boolean;
    public path: any = {
        lang: ''
    };
    public lang: string;
    private images: object = {};

    constructor() {
        const dev = process.env.NODE_ENV !== 'production';
        this.dev = dev;
    }

    public setImagen(key: string, imagen: string) {
        this.images[key] = imagen;
    }

    public getImages(): object {
        return this.images;
    }
}