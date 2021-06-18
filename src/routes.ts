import { Router } from 'express';
import { EntregaController } from './controllers/EntregaController';
import { FuncionarioController } from './controllers/FuncionarioController';

const routes = Router();

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);

routes.get('/entregaepi', EntregaController.index);
routes.post('/entregaepi', EntregaController.store);
routes.get('/entregaepi/:id', EntregaController.show);

export { routes };
