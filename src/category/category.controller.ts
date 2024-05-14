import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('categories')
  showAll(categories: string) {
    return this.categoryService.getAllCategories(categories);
  }

}
