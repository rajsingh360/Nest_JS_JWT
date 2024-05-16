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
  
  @Post('/save')
  async create(@Body() templateDto: CreateTemplateDto) {
    //console.log('template1231232131');
    try {
      const response = await this.templateService.create(templateDto);;
      return {
        message: 'Template Saved Successfully.',
        status: true,
        data: response
      };
    } catch (error) {
      // Handle any errors that might occur during fetching categories
      return {
        message: "Template dosn't saved.",
        status: false,
        error: error.message // Assuming error message is useful for debugging
      };
  }
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
