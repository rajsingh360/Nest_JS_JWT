import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity({name:'sub_category'})
export class SubCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catId: number;

  @Column()
  subCatId: number;

  @Column()
  subCatTitle: string;

  @Column()
  componentRender: string;

  @Column()
  srcUri: string;

  @Column()
  @CreateDateColumn()
  createAT: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => CategoryEntity, category => category.subcategories)
  category: CategoryEntity;
}
