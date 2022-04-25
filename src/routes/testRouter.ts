import { Router } from 'express'
import * as testController from '../controllers/testController.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'

const testRouter = Router()

testRouter.get('/tests/instructor', tokenValidation, testController.getTests)
testRouter.get('/tests/term', tokenValidation, testController.getTests)

export default testRouter