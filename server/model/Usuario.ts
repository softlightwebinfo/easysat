export class Usuario {
    private _id: number;
    private _nombre: string;
    private _email: string;
    private _fk_role: string;
    private _fecha_creacion: string;
    private _password: string = null;
    private _telefonos: string[] = [];

    constructor() {

    }

    public addTelefono(value: string) {
        this._telefonos.push(value);
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get fk_role(): string {
        return this._fk_role;
    }

    set fk_role(value: string) {
        this._fk_role = value;
    }

    get fecha_creacion(): string {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: string) {
        this._fecha_creacion = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get telefonos(): string[] {
        return this._telefonos;
    }

    set telefonos(value: string[]) {
        this._telefonos = value;
    }
}