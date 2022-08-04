import { Router } from 'express';
import * as categoryController from '../controllers/categoryController.js';
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js';

const categoryRouter = Router();

categoryRouter.get('/', tokenValidation, categoryController.getCategories);

export default categoryRouter;
