import {Service} from "@codeunic/api";
import {Product} from "../model/product";

@Service
export class ProductService {

    constructor() {
    }

    async getProduct(): Promise<Product> {
        let producto = new Product(1, "Bimo", 45);
        return await producto;
    }

}

