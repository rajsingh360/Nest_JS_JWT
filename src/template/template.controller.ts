import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { TemplateEntity } from './template.entity';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get('/')
  async findAll(){
    try {
      const response = await this.templateService.findAll();
      return {
        message: 'Success',
        status: true,
        data: response
      };
    } catch (error) {
      // Handle any errors that might occur during fetching categories
      return {
        message: 'Error',
        status: false,
        error: error.message // Assuming error message is useful for debugging
      };
    }
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
