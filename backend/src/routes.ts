import { Router } from 'express';
import multer from 'multer';

//import User
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserContoller } from './controllers/user/AuthUserContoller';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

//import category
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

//import products
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

//import orders and items
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';

import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';

//images uploads
import uploadConfig from './config/multer';


const router = Router();

//what directory will be save
const upload = multer(uploadConfig.upload("./tmp"))


//-- USER ROTES --
//for create (cadastrar) an user use post
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserContoller().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// --- Rotes and Categorys ----
//cadastrar Categoria é do tipo post
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//  ---- Rotes Produtcs ----
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// ---- Orders and items-------
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)






export { router };