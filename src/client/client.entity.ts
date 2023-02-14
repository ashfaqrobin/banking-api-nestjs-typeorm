import { Banker } from 'src/banker/banker.entity';
import { Person } from 'src/utils/person';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity({
  name: 'clients',
})
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    length: 10,
    unique: true,
  })
  card_number: string;

  @Column({
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: 'simple-array',
  })
  family_members: string[];

  @OneToMany(() => Transaction, (transactions) => transactions.client)
  transactions: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
}
