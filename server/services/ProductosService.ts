import {Service} from "@codeunic/api";
import {Usuario} from "../model/Usuario";
import {ORM} from "../libs/ORM";
import {Producto} from "../model/Producto";
import {Role} from "../model/Role";

@Service
export class ProductosService {
    constructor() {
    }

    async getProductos(limitStart = 0, limitEnd: 30): Promise<Producto[]> {
        try {
            let data = await ORM.db().query('SELECT nombre,id,fk_categoria,precio,referencia from "Productos" ORDER BY id DESC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);
            return data.map(item => {
                let pro = new Producto();
                pro.nombre = item.nombre;
                pro.fk_categoria = item.fk_categoria;
                pro.precio = item.precio;
                pro.id = item.id;
                pro.referencia = item.referencia;
                return pro;
            });
        } catch (e) {
            return [];
        }
    }

    async getProducto(idProd: number): Promise<Producto> {
        try {
            let {nombre, id, fk_categoria, precio, referencia} = await ORM.db().one('SELECT nombre,id,fk_categoria,precio,referencia from "Productos" WHERE id=$1', [idProd]);
            let pro = new Producto();
            pro.nombre = nombre;
            pro.fk_categoria = fk_categoria;
            pro.precio = precio;
            pro.id = id;
            pro.referencia = referencia;
            return pro;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async createProducto(Prod: Producto, idUsuario: number): Promise<Producto> {
        try {
            let {estado, id} = await ORM.db().one('SELECT * from p_ProductosRegistro($1,$2,$3,$4)', [
                Prod.referencia,
                Prod.nombre,
                Prod.precio,
                idUsuario
            ]);
            if (estado) {
                return await this.getProducto(id);
            }
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async updateProducto(Prod: Producto) {
        try {
            let {hay} = await ORM.db().one('SELECT count(*) as hay from "Productos" WHERE referencia=$1 AND id!=$2', [
                Prod.referencia,
                Prod.id
            ]);
            if (hay == 0) {
                let data = await ORM.db().any('UPDATE "Productos" SET referencia=$1,nombre=$2,precio=$3 WHERE id=$4', [
                    Prod.referencia,
                    Prod.nombre,
                    Prod.precio,
                    Prod.id
                ]);
                return Prod.id;
            }
            return false;
        } catch (e) {
            return null;
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(id) as total from "Productos"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteProducto(pro: Producto) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_ProductosDelete($1)', [pro.id]);
            return success;
        } catch (e) {
            return false;
        }
    }
}

