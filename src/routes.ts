import { Router } from 'express';
import { FuncionarioController } from './controllers/FuncionarioController';
const routes = Router();

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);

export { routes };
