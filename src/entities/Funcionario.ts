import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id || uuid();
  }
}
