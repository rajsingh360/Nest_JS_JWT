import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Get('categories')
  async showAll(categories: string) {
    try {
      const response = await this.categoryService.getAllCategories(categories);
      return {
        message: 'Success',
        status: true,
        data: response
      };
    } catch (error) {
      // Handle any errors that might occur during fetching categories
      return {
        message: 'Error',
        status: false,
        error: error.message // Assuming error message is useful for debugging
      };
    }
  }
}
