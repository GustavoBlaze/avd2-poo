import { getCustomRepository } from 'typeorm';
import { FuncionarioRepository } from '../repositories/FuncionarioRepository';

interface IFuncionarioCreate {
  nome: string;
  cpf: string;
  funcao: string;
}

export class FuncionarioService {
  async create({ nome, cpf, funcao }: IFuncionarioCreate) {
    const repository = getCustomRepository(FuncionarioRepository);

    const funcionario = repository.create({
      nome,
      cpf,
      funcao,
    });

    await repository.save(funcionario);

    return funcionario;
  }

  async index() {
    const repository = getCustomRepository(FuncionarioRepository);
    const funcionarios = await repository.find();

    return funcionarios;
  }
}
