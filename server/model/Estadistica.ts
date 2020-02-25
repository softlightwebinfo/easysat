export class Estadistica {
    private _key = '';
    private _nombre = '';
    private _valor = '';

    constructor(key: string, nombre: string, valor: number) {
        this._key = key;
        this._nombre = nombre;
        this._valor = valor;
    }

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get valor(): string {
        return this._valor;
    }

    set valor(value: string) {
        this._valor = value;
    }
}