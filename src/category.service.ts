import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }
}
