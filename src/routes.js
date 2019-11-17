import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMeddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

// Outra forma de utilizar os middlewares
// routes.use(authMeddleware);

routes.put('/users', authMeddleware, UserController.update);

export default routes;
