import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';
import { ProductController } from './product.controller';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'miTienda',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category, Product]),
  ],
  controllers: [AppController, ProductController, CategoryController],
  providers: [AppService, CategoryService, ProductService],
})
export class AppModule {}
