export class User {
    private _id: number = null;
    private _nombre: string = '';
    private _email: string = '';
    private _token: string;

    set id(value: number) {
        this._id = value;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set token(value: string) {
        this._token = value;
    }

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get email(): string {
        return this._email;
    }

    get token(): string {
        return this._token;
    }

    constructor() {

    }
}