import { Router } from 'express';
import BattleController from './controllers/BattleController';
import EstudosigtiController from './controllers/EstudosigtiController';
import UserContoller from './controllers/UserController';

const routes = Router();

routes.get('/users', UserContoller.index)
routes.post('/users', UserContoller.create)

routes.get('/pokemon', BattleController.battle)
routes.get('/pokemon/is-sea', BattleController.pokemonFromSea)

routes.get('/igti', EstudosigtiController.store)

export default routes;