import { Router } from 'express'
import * as disciplineController from '../controllers/disciplineController.js'

const disciplineRouter = Router()

disciplineRouter.get('/disciplines', disciplineController.getDisciplineCategories)

export default disciplineRouter