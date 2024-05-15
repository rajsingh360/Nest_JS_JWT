import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { isUnique } from 'src/core/custom-validator/is_unique';

export enum StatusType {
  PREVIEW = 'PREVIEW',
  PUBLISH = 'PUBLISH',
  DRAFT = 'DRAFT'
}

export class CreateTemplateDto {

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
