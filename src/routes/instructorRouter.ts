import { Router } from 'express'
import * as instructorController from '../controllers/instructorController.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'

const instructorRouter = Router()

instructorRouter.get(
	'/instructors/:disciplineId',
	tokenValidation,
	instructorController.getInstructorByDiscipline
)

export default instructorRouter
