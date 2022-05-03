import { Router } from 'express'
import * as testController from '../controllers/testController.js'
import { schemaValidation } from '../middlewares/schemaValidationMiddleware.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'
import testSchema from '../schemas/testSchema.js'

const testRouter = Router()

testRouter.get('/instructors', tokenValidation, testController.getTests)

testRouter.get('/terms', tokenValidation, testController.getTests)

testRouter.post(
	'/create',
	tokenValidation,
	schemaValidation(testSchema),
	testController.createTest
)

testRouter.patch('/:id/views', tokenValidation, testController.updateViewsCount)

export default testRouter
