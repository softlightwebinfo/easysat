import {Service} from "@codeunic/api";
import {Usuario} from "../model/Usuario";
import {ORM} from "../libs/ORM";
import {User} from "../model/User";

@Service
export class UsuariosService {
    constructor() {
    }

    async getTelefonos(id: number) {
        try {
            let data = await ORM.db().query('SELECT telefono from "Usuarios_Telefonos" WHERE fk_id_usuario=$1 ORDER BY telefono DESC', [id]);
            return data.map(i => i.telefono);
        } catch (e) {
            return [];
        }
    }

    async getUsuarios(limitStart = 0, limitEnd: 30): Promise<Usuario[]> {
        try {
            let data = await ORM.db().query('SELECT fecha_creacion,id,nombre,email,fk_role from "Usuarios" ORDER BY id DESC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);
            let datos = data.map(async item => {
                let usua = new Usuario();
                usua.fecha_creacion = item.fecha_creacion;
                usua.email = item.email;
                usua.nombre = item.nombre;
                usua.id = item.id;
                usua.fk_role = item.fk_role;
                usua.telefonos = await this.getTelefonos(usua.id);
                return usua;
            });
            return await Promise.all(datos);
        } catch (e) {
            return [];
        }
    }

    async createUsuario(User: Usuario) {
        try {
            let [{p_usuariosregistro}] = await ORM.db().query('SELECT p_UsuariosRegistro($1,$2,$3)', [
                User.nombre,
                User.email || null,
                User.password || null
            ]);
            let id = p_usuariosregistro;
            return id;
        } catch (e) {
            console.log(e);
        }
    }

    async existEmail(email: string, id: number = null) {
        try {
            if (id) {
                let {id} = await ORM.db().one('SELECT id from "Usuarios" where email=$1 AND id!=$2', [email, id]);
            } else {
                let {id} = await ORM.db().one('SELECT id from "Usuarios" where email=$1', [email]);
            }
            return id > 0;
        } catch (e) {
            return false;
        }
    }

    async getUser(idUser: any): Promise<Usuario> {
        try {
            let {
                fecha_creacion, id, nombre, email, fk_role
            } = await ORM.db().one('SELECT fecha_creacion,id,nombre,email,fk_role from "Usuarios" WHERE id=$1', [idUser]);
            let user = new Usuario();
            user.fecha_creacion = fecha_creacion;
            user.email = email;
            user.nombre = nombre;
            user.fk_role = fk_role;
            user.id = id;
            return user;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async updateUsuario(User: Usuario) {
        try {
            let data = await ORM.db().any('UPDATE "Usuarios" SET nombre=$1,email=$2 WHERE id=$3', [
                User.nombre,
                User.email,
                User.id
            ]);
            if (User.password) {
                let data = await ORM.db().any('UPDATE "Usuarios" SET password=$1 WHERE id=$2', [
                    User.password,
                    User.id
                ]);
            }

            return data ? User.id : null;
        } catch (e) {
            console.log(e);
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(id) as total FROM "Usuarios"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteUsuario(user: User) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_UsuariosDelete($1)', [user.id]);
            return success;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

