import { Repository, EntityRepository } from 'typeorm';
import { Entrega } from '../entities/Entrega';

@EntityRepository(Entrega)
class EntregaRepository extends Repository<Entrega> {}

export { EntregaRepository };
