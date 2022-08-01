import express from 'express';
import userController from '../controllers/users.controller';

const user = express.Router();

user.post('/users', userController.login);

export default user;