import { Router } from 'express'
import * as testController from '../controllers/testController.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'

const testRouter = Router()

testRouter.get('/tests/instructor', tokenValidation, testController.getByInstructor)
// testRouter.get('/tests/term', (req, res) => res.sendStatus(200))

export default testRouter