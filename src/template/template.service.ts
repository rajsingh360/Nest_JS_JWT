import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository, InsertResult, Like } from 'typeorm';
import { TemplateEntity } from './template.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Injectable()
export class TemplateService {

  constructor(
    @InjectRepository(TemplateEntity)
    private readonly templateRepository: Repository<TemplateEntity>
  ) {}
  
  async findOne(querydata): Promise<TemplateEntity> {   
    return await this.templateRepository.findOne({
      where: querydata,
    });
  }

  // async createOrUpdate(templateDto: CreateTemplateDto) {

  // }

  async create(templateDto: CreateTemplateDto) {
    console.log(templateDto);
    const template = new TemplateEntity();
    // Generate random string
    const randomString = this.generateRandomString(20); // Change 10 to the desired length of the random string

    template.unId = randomString;
    template.title = templateDto.title;
    template.preiviewUri = templateDto.preiviewUri;
    template.component = templateDto.component;
    template.status = templateDto.status;
    return await this.templateRepository.save(template);
  }

  async findAll(): Promise<TemplateEntity[]> {
    return await this.templateRepository.find();
  }
  
  async updateTemplate(templateDto: UpdateTemplateDto) {    

    let template = await this.findOne({id:templateDto.id});
    //console.log(template);
    //template.unId = randomString;
    template.title = templateDto.title;
    template.preiviewUri = templateDto.preiviewUri;
    template.component = templateDto.component;
    template.status = templateDto.status;
    return await this.templateRepository.save(template);
    
  
  
  }


  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



}
