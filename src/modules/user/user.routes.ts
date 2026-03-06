import Route from 'express';
import { UserController } from './user.controller';
export const userRoutes = Route();

const userController = UserController.getInstance();

userRoutes.get('/user/:id', userController.getUserById);

userRoutes.post('/user', userController.registrationUser);
