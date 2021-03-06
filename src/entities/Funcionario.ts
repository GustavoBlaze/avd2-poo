import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Entrega } from './Entrega';

@Entity('funcionarios')
export class Funcionario {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  funcao: string;

  @OneToMany(() => Entrega, entrega => entrega.funcionario)
  entregas: Entrega[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id || uuid();
  }
}
