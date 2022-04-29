import { Router } from 'express'
import * as testController from '../controllers/testController.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'

const testRouter = Router()

testRouter.get(
  '/instructor', 
  tokenValidation, 
  testController.getTests
)

testRouter.get(
  '/instructor/:id', 
  tokenValidation, 
  testController.getInstructorTests
)

testRouter.get(
  '/term', 
  tokenValidation, 
  testController.getTests
)

testRouter.post(
  '/newTest',
  tokenValidation,
  testController.postTest
)

export default testRouter