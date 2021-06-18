import { getCustomRepository } from 'typeorm';
import { EntregaRepository } from '../repositories/EntregaRepository';

interface IEntregaCreate {
  funcionario_id: string;
  nome_epi: string;
  data_entrega: Date;
  quantidade_entregue: number;
}

export class EntregaService {
  async create({
    funcionario_id,
    nome_epi,
    data_entrega,
    quantidade_entregue,
  }: IEntregaCreate) {
    const repository = getCustomRepository(EntregaRepository);

    const entrega = repository.create({
      funcionario_id,
      data_entrega: new Date(data_entrega),
      nome_epi,
      quantidade_entregue,
    });

    await repository.save(entrega);

    return entrega;
  }

  async index() {
    const repository = getCustomRepository(EntregaRepository);
    const entregas = await repository.find({ relations: ['funcionario'] });

    return entregas;
  }
}
