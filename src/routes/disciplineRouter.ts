import { Router } from 'express';
import * as disciplineController from '../controllers/disciplineController.js';
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js';

const disciplineRouter = Router();

disciplineRouter.get('/', tokenValidation, disciplineController.getDisciplines);

export default disciplineRouter;
