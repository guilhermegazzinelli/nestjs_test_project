import { Body, Controller, Post, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {  }
    
    @Post()
    addProduct(
        @Body('title') productTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') price: number): any {
        return this.productsService.insertProduct(productTitle, prodDesc, price);

    }

    @Get()
    getAllProducts(): any {}
}