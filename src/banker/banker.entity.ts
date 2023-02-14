import { Client } from 'src/client/client.entity';
import { Person } from 'src/utils/person';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({
  name: 'bankers',
})
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'bankers_clients',
    joinColumn: {
      name: 'banker',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    },
  })
  clients: Client[];
}
