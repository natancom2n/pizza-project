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

//import orders
import { CreateOrderController } from './controllers/order/CreateOrderController';

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

// ---- Orders -------
router.post('/order', isAuthenticated, new CreateOrderController().handle)




export { router };