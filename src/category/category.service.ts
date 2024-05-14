import { Injectable } from '@nestjs/common';

import { Repository, InsertResult, Like } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}
  
  async getAllCategories(categories: string) {

    return await this.categoryRepository.find({ relations: ['subcategories'] });
    
  }

}
