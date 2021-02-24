import { Router } from 'express';
import BattleController from './controllers/BattleController';
import UserContoller from './controllers/UserController';

const routes = Router();

routes.get('/users', UserContoller.index)
routes.post('/users', UserContoller.create)

routes.get('/pokemon', BattleController.battle)

export default routes;