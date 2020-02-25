export class Role {
    private _role: string;

    constructor() {

    }

    set role(value: string) {
        this._role = value;
    }

    get role(): string {
        return this._role;
    }
}