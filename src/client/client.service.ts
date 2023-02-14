import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  getClients(): Client[] {
    return [];
  }
}
