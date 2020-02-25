import {Service} from "@codeunic/api";
import {ORM} from "../libs/ORM";
import {Role} from "../model/Role";
import {Categoria} from "../model/Categoria";

@Service
export class RolesService {
    constructor() {
    }

    async getRoles(limitStart = 0, limitEnd: 30): Promise<Role[]> {
        try {
            let data = await ORM.db().query('SELECT role from "Roles" ORDER BY role ASC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);
            return data.map(item => {
                let pro = new Role();
                pro.role = item.role;
                return pro;
            });
        } catch (e) {
            return [];
        }
    }

    async getRole(idRole: string): Promise<Role> {
        try {
            let {role} = await ORM.db().one('SELECT role from "Roles" WHERE role=$1', [idRole]);
            let pro = new Role();
            pro.role = role;
            return pro;
        } catch (e) {
            return null;
        }
    }

    async createRole(Rol: Role, idUsuario: number): Promise<Role> {
        try {
            let {estado, id} = await ORM.db().one('SELECT * from p_RolesRegistro($1,$2)', [Rol.role, idUsuario]);
            if (estado) {
                return await this.getRole(id);
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    async updateRole(Rol: Role, id: string) {
        try {
            let data = await ORM.db().any('UPDATE "Roles" set role=$1 WHERE role=$2', [
                Rol.role,
                id
            ]);
            return data ? Rol.role : null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(role) as total from "Roles"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteRole(pro: Role) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_RolesDelete($1)', [pro.role]);
            return success;
        } catch (e) {
            return false;
        }
    }
}

