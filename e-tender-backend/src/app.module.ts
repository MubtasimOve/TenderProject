import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';




@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './Images',
      }),
    }),
    
    AdminModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'petshopper',
      autoLoadEntities: true,
      synchronize: true,
    }),],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }