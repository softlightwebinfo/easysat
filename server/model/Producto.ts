export class Producto {
    private _id: number;
    private _referencia: string;
    private _nombre: string;
    private _precio: number;
    private _fk_categoria: number;

    constructor() {

    }

    set id(value: number) {
        this._id = value;
    }

    set referencia(value: string) {
        this._referencia = value;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    set precio(value: number) {
        this._precio = value;
    }

    set fk_categoria(value: number) {
        this._fk_categoria = value;
    }

    get id(): number {
        return this._id;
    }

    get referencia(): string {
        return this._referencia;
    }

    get nombre(): string {
        return this._nombre;
    }

    get precio(): number {
        return this._precio;
    }

    get fk_categoria(): number {
        return this._fk_categoria;
    }
}