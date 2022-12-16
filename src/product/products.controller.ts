import { Body, Controller, Post, Get, Param, Patch, Delete } from "@nestjs/common";
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
    getAllProducts(){
        return {products: this.productsService.getProducts()}
    }

    @Get(':id')
    getSingleProduct(@Param('id') id: string){
        return  this.productsService.getSingleProduct(id);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string, 
        @Body('title') title: string, 
        @Body('description') description: string, 
        @Body('price') price: number){
        
        this.productsService.updateProduct(id, title, description, price);
        return null;

    }

    @Delete(':id')
    removeProduct(@Param('id') id: string){
        this.productsService.deleteProduct(id);
        return null;
    }

}