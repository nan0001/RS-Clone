import { Router } from 'express';
import UserController from '../controller/User.controller';
import authJwt from '../middleware/authJwt.middleware';

const userRouter = Router();
const userController = new UserController();

// get user data
userRouter.get('/get', authJwt, userController.getUserData);

// post user data
userRouter.post('/post', authJwt, userController.postUserData);

export default userRouter;
