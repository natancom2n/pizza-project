import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserContoller } from './controllers/user/AuthUserContoller';

const router = Router();


//-- USER ROTES --
//for create (cadastrar) an user use post
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserContoller().handle)

export { router };