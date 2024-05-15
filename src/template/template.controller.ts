import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplateEntity } from './template.entity';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get('/')
  async findAll(): Promise<TemplateEntity[]> {
    return this.templateService.findAll();
  }

  // @Get('id/:id')
  // async findById(@Param('id') id: string): Promise<TemplateEntity> {
  //   return this.templateService.findById(+id);
  // }
  
  @Post('/create')
  create(@Body() templateDto: CreateTemplateDto) {
    //console.log('template1231232131');
    return this.templateService.create(templateDto);
  }

  // @Put('/edit')
  // async editTemplate(@Body() templateDto: CreateTemplateDto){
    
  //   return await this.templateService.updateTemplate(templateDto);
  // }

}
