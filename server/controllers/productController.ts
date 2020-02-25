import {Controller, Get, Post, Route, Request, Response, RequestBody, ResponseBody} from "@codeunic/api";

import {ProductService} from "../services/productService";
import {Product} from "../model/product";


@Controller
@Route("/product")
class ProductController {
    constructor() {
    }

    @Get("/")
    @ResponseBody
    getProduct(req: Request, res: Response): Promise<Product> {
        let p = new ProductService();
        return p.getProduct();
    }

    @Post("/")
    addProduct(@RequestBody product) {
        console.log(product);
    }

} 