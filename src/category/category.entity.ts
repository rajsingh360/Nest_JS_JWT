import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { SubCategoryEntity } from './sub-category.entity';

export enum StatusType {
  PREVIEW = 'PREVIEW',
  PUBLISH = 'PUBLISH',
  DRAFT = 'DRAFT'
}

@Entity({name:'category'})
export class CategoryEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  unId: string;

  @Column()
  sitecoreKey: string;

  @Column()
  sitecoreTemplateId: string;

  @Column()
  imageUri: string;

  @Column()
  componentOptionType: string;

  @Column()
  componentName: string;

  @Column()
  catId: number;

  @Column()
  catTitle: string;

  @Column({
    type: 'enum',
    enum: StatusType,
    default: StatusType.PUBLISH, // Optional: Set a default value
  })
  status: StatusType;

  @Column()
  @CreateDateColumn()
  createAT: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => SubCategoryEntity, subcategory => subcategory.category)
  subcategories: SubCategoryEntity[];

}
