import { Module } from '@nestjs/common';
import { BankerController } from './banker.controller';
import { BankerService } from './banker.service';

@Module({
  imports: [],
  controllers: [BankerController],
  providers: [BankerService],
})
export class BankerModule {}
