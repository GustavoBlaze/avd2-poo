import { Request, Response } from 'express';
import { FuncionarioService } from '../services/FuncionarioService';

export class FuncionarioController {
  static async index(req: Request, res: Response) {
    const service = new FuncionarioService();
    const funcionarios = await service.index();

    return res.json(funcionarios);
  }

  static async store(req: Request, res: Response) {
    const { cpf, nome, funcao } = req.body;
    const service = new FuncionarioService();

    try {
      const funcionario = await service.create({ cpf, nome, funcao });
      return res.json(funcionario);
    } catch (error) {
      console.log({ error });
      res.status(400).json({ message: error.message });
    }
  }
}
