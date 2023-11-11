import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;
}
