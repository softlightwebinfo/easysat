import {Service} from "@codeunic/api";
import {ORM} from "../libs/ORM";
import {Empresa} from "../model/Empresa";

@Service
export class EmpresasService {
    constructor() {
    }

    async getTelefonos(id: number) {
        try {
            let data = await ORM.db().query('SELECT telefono from "Empresas_Telefonos" WHERE fk_id_empresa=$1 ORDER BY telefono DESC', [id]);
            return data.map(i => i.telefono);
        } catch (e) {
            return [];
        }
    }

    async getEmpresas(limitStart = 0, limitEnd: 30): Promise<Empresa[]> {
        try {
            let data = await ORM.db().query('SELECT nombre,id,cif,fecha_creacion from "Empresas" ORDER BY id DESC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);
            let datos = data.map(async item => {
                let usua = new Empresa();
                usua.nombre = item.nombre;
                usua.id = item.id;
                usua.cif = item.cif;
                usua.telefonos = await this.getTelefonos(usua.id);
                usua.fecha_creacion = item.fecha_creacion;
                return usua;
            });
            return await Promise.all(datos);
        } catch (e) {
            return [];
        }
    }

    async getEmpresa(idEmpresa: any): Promise<Empresa> {
        try {
            let {
                nombre, id, cif, fecha_creacion
            } = await ORM.db().one('SELECT nombre,id,cif,fecha_creacion from "Empresas" WHERE id=$1', [idEmpresa]);
            let usua = new Empresa();
            usua.nombre = nombre;
            usua.id = id;
            usua.cif = cif;
            usua.fecha_creacion = fecha_creacion;
            return usua;
        } catch (e) {
            return null;
        }
    }

    async createEmpresa(Empre: Empresa, fk_usuario: number) {
        try {
            let {id, estado} = await ORM.db().one('SELECT * from p_EmpresasRegistro($1,$2,$3)', [
                Empre.nombre,
                Empre.cif,
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

    async updateEmpresa(Empr: Empresa) {
        try {
            let {total} = await ORM.db().one('SELECT count(*) as total FROM "Empresas" WHERE cif=$1 and id!=$2', [
                Empr.cif,
                Empr.id
            ]);
            if (total == 0) {
                let data = await ORM.db().any('UPDATE "Empresas" SET cif=$1,nombre=$2 WHERE id=$3', [
                    Empr.cif,
                    Empr.nombre,
                    Empr.id
                ]);
                return data ? Empr.id : null;
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(id) as total from "Empresas"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteEmpresa(user: Empresa) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_EmpresasDelete($1)', [user.id]);
            return success;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

