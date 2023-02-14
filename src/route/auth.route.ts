import { Router } from 'express';
import userValidation from '../middleware/authValidation.middleware';
import AuthController from '../controller/Auth.controller';

const authRouter = Router();
const userController = new AuthController();

// register
authRouter.post('/register', userValidation, userController.createUser);

// login
authRouter.post('/login', userController.loginUser);

// guest
authRouter.post('/guest', userController.loginGuest);

export default authRouter;
