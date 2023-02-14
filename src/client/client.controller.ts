import { Controller, Get, Post, Req } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { Request } from 'express';

@Controller('api/clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getAllClients(): Client[] {
    return this.clientService.getClients();
  }

  // @Post()
  // createClient(@Req() req: Request): Promise<Client> {
  //   const {
  //     first_name,
  //     last_name,
  //     email,
  //     card_number,
  //     balance,
  //     family_members,
  //   } = req.body;

  //   const newClient = Client.create({
  //     first_name,
  //     last_name,
  //     email,
  //     card_number,
  //     balance,
  //     family_members,
  //   });

  //   return newClient.save();
  //   // return Client.save(newClient);
  // }
}
