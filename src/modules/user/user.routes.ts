import Route from 'express';
import { UserController } from './user.controller';
export const userRoutes = Route();

userRoutes.get('/user/:id', UserController.getUserById);

userRoutes.post('/user', UserController.registrationUser);
