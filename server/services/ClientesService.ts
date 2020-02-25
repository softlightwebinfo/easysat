import {Service} from "@codeunic/api";
import {ORM} from "../libs/ORM";
import {Cliente} from "../model/Cliente";
import {Usuario} from "../model/Usuario";

@Service
export class ClientesService {
    constructor() {
    }

    async getTelefonos(id: number) {
        try {
            let data = await ORM.db().query('SELECT telefono from "Clientes_Telefonos" WHERE fk_id_cliente=$1 ORDER BY telefono DESC', [id]);
            return data.map(i => i.telefono);
        } catch (e) {
            return [];
        }
    }

    async getClientes(limitStart = 0, limitEnd: 30): Promise<Cliente[]> {
        try {
            let data = await ORM.db().query('SELECT nombre,id,dni,direccion,fecha_creacion,fk_empresa from "Clientes" ORDER BY id DESC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);

            let datos = data.map(async item => {
                let usua = new Cliente();
                usua.nombre = item.nombre;
                usua.id = item.id;
                usua.dni = item.dni;
                usua.direccion = item.direccion;
                usua.fecha_creacion = item.fecha_creacion;
                usua.fk_empresa = item.fk_empresa;
                usua.telefonos = await this.getTelefonos(usua.id);
                return usua;
            });
            return await Promise.all(datos);
        } catch (e) {
            return [];
        }
    }

    async getCliente(idCliente: any): Promise<Cliente> {
        try {
            let {
                nombre, id, dni, direccion, fecha_creacion, fk_empresa
            } = await ORM.db().one('SELECT nombre,id,dni,direccion,fecha_creacion,fk_empresa from "Clientes" WHERE id=$1', [idCliente]);
            let usua = new Cliente();
            usua.nombre = nombre;
            usua.id = id;
            usua.dni = dni;
            usua.direccion = direccion;
            usua.fecha_creacion = fecha_creacion;
            usua.fk_empresa = fk_empresa;
            return usua;
        } catch (e) {
            return null;
        }
    }

    async createCliente(Client: Cliente, fk_usuario: number) {
        try {
            let {id, estado} = await ORM.db().one('SELECT * from p_ClientesRegistro($1,$2)', [
                Client.nombre,
                fk_usuario
            ]);
            if (estado) {
                return id;
            }
            return null;
        } catch (e) {
            console.log(e);
            return 0;
        }
    }

    async updateCliente(User: Cliente) {
        try {
            let data = await ORM.db().any('UPDATE "Clientes" SET nombre=$1 WHERE id=$2', [
                User.nombre,
                User.id
            ]);
            return data ? User.id : null;
        } catch (e) {
            return null;
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(id) as total from "Clientes"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteCliente(user: Cliente) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_ClientesDelete($1)', [user.id]);
            return success;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

