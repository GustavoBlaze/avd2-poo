import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Funcionario } from './Funcionario';
import { v4 as uuid } from 'uuid';

@Entity('entregaEPI')
export class Entrega {
  @PrimaryColumn()
  id: string;

  @Column()
  funcionario_id: string;

  @Column()
  nome_epi: string;

  @Column()
  data_entrega: Date;

  @Column()
  quantidade_entregue: number;

  @ManyToOne(() => Funcionario, funcionario => funcionario.entregas)
  @JoinColumn({ name: 'funcionario_id', referencedColumnName: 'id' })
  funcionario: Funcionario;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id || uuid();
  }
}
