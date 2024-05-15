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

export enum StatusType {
  PREVIEW = 'PREVIEW',
  PUBLISH = 'PUBLISH',
  DRAFT = 'DRAFT'
}

@Entity({name:'template'})
export class TemplateEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unId: string;

  @Column()
  title: string;

  @Column()
  preiviewUri: string;

  @Column()
  component: string;

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
  

}
