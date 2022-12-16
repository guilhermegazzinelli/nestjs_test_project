import { Injectable, NotFoundException } from "@nestjs/common";
import { title } from "process";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    
    insertProduct(title: string, desc: string, price: number) {
        const newProduct = new Product(Math.random().toString(), title, desc, price);
        this.products.push(newProduct);
        return newProduct;
        
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.findProductById(productId)[0];
        return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number){
        const [product, idx] = this.findProductById(productId);
        const updatedProduct = { ...product }
        
        if(title){
            updatedProduct.title = title;
        }

        if(desc){
            updatedProduct.description = desc;
        }

        if(price){
            updatedProduct.price = price;
        }

        this.products[idx]= updatedProduct;
    }

    deleteProduct(id: string) {
        const [_, idx] = this.findProductById(id);
        this.products.splice(idx, 1);
    }

    private findProductById(productId: string): [Product, number]{
        const productIndex = this.products.findIndex(p => p.id === productId);
        const product = this.products[productIndex];

        if(!product){
            throw new NotFoundException('Product not found');
        }

        return [product, productIndex];

    }

}