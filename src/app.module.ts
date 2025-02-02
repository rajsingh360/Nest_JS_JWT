import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { User } from './users/user.entity';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/category.entity';
import { SubCategoryEntity } from './category/sub-category.entity';
import { TemplateEntity } from './template/template.entity';
import { TemplateModule } from './template/template.module';

const entities = [User, CategoryEntity, SubCategoryEntity, TemplateEntity];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
    }),
    TemplateModule,
    CategoryModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
