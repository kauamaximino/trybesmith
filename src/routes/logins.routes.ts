import express from 'express';
import loginsController from '../controllers/logins.controller';
import middlewares from '../middlewares/index.validate';

const logins = express.Router();

logins.post('/login', middlewares.validateBody, loginsController.login);

export default logins;
