import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from './client.entity';

export enum TransactionTypes {
  DEPOSITE = 'deposite',
  WITHDRAW = 'withdraw',
}

@Entity({
  name: 'transactions',
})
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionTypes,
  })
  type: string;

  @Column({
    type: 'numeric',
  })
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Client, (clients) => clients.transactions)
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;
}
