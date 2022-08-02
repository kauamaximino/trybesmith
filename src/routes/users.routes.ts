import express from 'express';
import userController from '../controllers/users.controller';
import middlewares from '../middlewares/index.validate';

const user = express.Router();

user.post(
  '/users',
  middlewares.validateUsername,
  middlewares.validateClasse,
  middlewares.validateLevel,
  middlewares.validatePassword,
  userController.login,
);

export default user;