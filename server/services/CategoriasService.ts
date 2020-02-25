import {Service} from "@codeunic/api";
import {ORM} from "../libs/ORM";
import {Categoria} from "../model/Categoria";
import {Producto} from "../model/Producto";

@Service
export class CategoriasService {
    constructor() {
    }

    async getCategorias(limitStart = 0, limitEnd: 30): Promise<Categoria[]> {
        try {
            let data = await ORM.db().query('SELECT categoria,id from "Categorias" WHERE padre IS NULL ORDER BY id DESC LIMIT $1 OFFSET $2', [limitEnd, limitStart]);
            return data.map(item => {
                let pro = new Categoria();
                pro.id = item.id;
                pro.categoria = item.categoria;
                return pro;
            });
        } catch (e) {
            return [];
        }
    }

    async getCategoria(idCat: number): Promise<Categoria> {
        try {
            let {id, categoria} = await ORM.db().one('SELECT categoria,id from "Categorias" WHERE id=$1', [idCat]);
            let pro = new Categoria();
            pro.id = id;
            pro.categoria = categoria;
            return pro;
        } catch (e) {
            return null;
        }
    }

    async createCategoria(Cat: Categoria, idUsuario: number): Promise<Categoria> {
        try {
            let {estado, id} = await ORM.db().one('SELECT * from p_CategoriasRegistro($1,$2)', [Cat.categoria, idUsuario]);
            if (estado) {
                return await this.getCategoria(Number(id));
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    async updateCategoria(Cat: Categoria) {
        try {
            let data = await ORM.db().any('UPDATE "Categorias" set categoria=$1 WHERE id=$2', [
                Cat.categoria,
                Cat.id
            ]);
            return data ? Cat.id : null;
        } catch (e) {
            return null;
        }
    }

    async count(): Promise<number> {
        try {
            let {total} = await ORM.db().one('SELECT count(id) as total from "Categorias"');
            return total;
        } catch (e) {
            return 0;
        }
    }

    async deleteCategoria(cat: Categoria) {
        try {
            let {success} = await ORM.db().one('SELECT * FROM p_CategoriasDelete($1)', [cat.id]);
            return success;
        } catch (e) {
            return false;
        }
    }
}

