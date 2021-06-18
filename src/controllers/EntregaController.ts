import { Request, Response } from 'express';
import { EntregaService } from '../services/EntregaService';

export class EntregaController {
  static async index(req: Request, res: Response) {
    const service = new EntregaService();
    const entregas = await service.index();

    return res.json(entregas);
  }

  static async store(req: Request, res: Response) {
    const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } =
      req.body;

    const service = new EntregaService();

    try {
      const entrega = await service.create({
        funcionario_id,
        nome_epi,
        data_entrega,
        quantidade_entregue,
      });
      return res.json(entrega);
    } catch (error) {
      console.log({ error });
      res.status(400).json({ message: error.message });
    }
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;
    const service = new EntregaService();

    try {
      const entrega = await service.getById({ id });
      return res.json(entrega);
    } catch (error) {
      console.log({ error });
      res.status(400).json({ message: error.message });
    }
  }

  static async destroy(req: Request, res: Response) {
    const { id } = req.params;
    const service = new EntregaService();

    try {
      await service.destroyById({ id });
      return res.json({ message: 'Entrega deletada!' });
    } catch (error) {
      console.log({ error });
      res.status(400).json({ message: error.message });
    }
  }
}
