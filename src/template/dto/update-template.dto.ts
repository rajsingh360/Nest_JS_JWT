import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { isExists } from 'src/core/custom-validator/is_exist';
import { isUnique } from 'src/core/custom-validator/is_unique';

export enum StatusType {
  PREVIEW = 'PREVIEW',
  PUBLISH = 'PUBLISH',
  DRAFT = 'DRAFT'
}

export class UpdateTemplateDto {

  @IsNotEmpty()
  // @IsInt()
  // @isExists({connectionName: 'db-name', tableName: 'template', column: 'id'})
  id: number;

  @IsNotEmpty()
  unId: string;

  @IsNotEmpty()
  title: string;

  @IsOptional()
  preiviewUri: string;

  @IsOptional()
  component: string;

  @IsNotEmpty()
    @IsEnum(StatusType, { message: 'Invalid Status Type' })
    status:StatusType

}
