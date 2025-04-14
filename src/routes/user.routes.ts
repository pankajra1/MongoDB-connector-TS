import express from 'express';
import { UserController } from '../controllers/user.controller';

export const userRoutes = express.Router();

userRoutes.post('/', UserController.create);
userRoutes.get('/', UserController.list);
userRoutes.get('/:name', UserController.find);
userRoutes.put('/:name', UserController.update);
userRoutes.delete('/:name', UserController.delete);
userRoutes.post('/query/raw', UserController.customQuery); // custom query
