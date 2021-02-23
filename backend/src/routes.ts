import { Router } from 'express';
import UserContoller from './controllers/UserController';

const routes = Router();

routes.get('/users', UserContoller.index)
routes.post('/users', UserContoller.create)

export default routes;