import { Controller, Get, Post, Body, Param, Put, Req } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplateEntity } from './template.entity';
import { UpdateTemplateDto } from './dto/update-template.dto';

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
  // create(@Req() request: Request) {
  //   const requestBody = request.body;
  //   //console.log('template1231232131');

  //   return this.templateService.create(requestBody);
  // }

  @Post('/update')
  async updateTemplate(@Body() templateDto: UpdateTemplateDto){
    
    return await this.templateService.updateTemplate(templateDto);
  }

}
