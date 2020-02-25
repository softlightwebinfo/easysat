export class Categoria {
    private _id: number;
    private _categoria: string;
    constructor(){

    }

    set id(value: number) {
        this._id = value;
    }

    set categoria(value: string) {
        this._categoria = value;
    }

    get id(): number {
        return this._id;
    }

    get categoria(): string {
        return this._categoria;
    }
}