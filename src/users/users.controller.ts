import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('id/:id')
  showById(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }

  @Get('email/:email')
  showByEmail(@Param('email') email: string) {
    return this.usersService.UserFindByEmail(email);
  }
}
