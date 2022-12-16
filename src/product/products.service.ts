import { Injectable } from "@nestjs/common";
import { title } from "process";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    
    insertProduct(title: string, desc: string, price: number) {
        const newProduct = new Product(new Date().toString(), title, desc, price);
        this.products.push(newProduct);
        return newProduct;
        
    }
}