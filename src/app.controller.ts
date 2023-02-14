import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
// import { db } from './utils/db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(): Promise<string> {
    // const [clients, _] = await db.query(`SELECT * FROM users WHERE id = 1`);
    // console.log(clients[0]);
    return 'Home Page';
  }
}
