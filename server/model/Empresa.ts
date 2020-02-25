export class Empresa {
    private _id: number;
    private _nombre: string;
    private _cif: string;
    private _fecha_creacion: string;
    private _telefonos: string[] = [];

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

    get cif(): string {
        return this._cif;
    }

    set cif(value: string) {
        this._cif = value;
    }

    get fecha_creacion(): string {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: string) {
        this._fecha_creacion = value;
    }

    get telefonos(): string[] {
        return this._telefonos;
    }

    set telefonos(value: string[]) {
        this._telefonos = value;
    }
}