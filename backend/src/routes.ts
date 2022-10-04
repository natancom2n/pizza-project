import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
 
const router = Router();


//-- USER ROTES --
//for create (cadastrar) an user use post
router.post('/users', new CreateUserController().handle)

export { router };