import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { ClientModule } from './client/client.module';
import { BankerModule } from './banker/banker.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'nestjs_typeorm_v1',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([User, Product]),
    ClientModule,
    BankerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
