export class Cliente {
    private _id: number;
    private _nombre: string;
    private _dni: string;
    private _direccion: string;
    private _fecha_nacimiento: string;
    private _fecha_creacion: string;
    private _fk_empresa: string;
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

    get dni(): string {
        return this._dni;
    }

    set dni(value: string) {
        this._dni = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get fecha_nacimiento(): string {
        return this._fecha_nacimiento;
    }

    set fecha_nacimiento(value: string) {
        this._fecha_nacimiento = value;
    }

    get fecha_creacion(): string {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: string) {
        this._fecha_creacion = value;
    }

    get fk_empresa(): string {
        return this._fk_empresa;
    }

    set fk_empresa(value: string) {
        this._fk_empresa = value;
    }

    get telefonos(): any {
        return this._telefonos;
    }

    set telefonos(value: any) {
        this._telefonos = value;
    }
}