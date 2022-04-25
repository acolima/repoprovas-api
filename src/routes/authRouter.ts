import { Router } from 'express'
import * as authController from '../controllers/authController.js'
import { schemaValidation } from '../middlewares/schemaValidationMiddleware.js'
import { tokenValidation } from '../middlewares/tokenValidationMiddleware.js'
import userSchema from '../schemas/userSchema.js'

const authRouter = Router()

authRouter.post('/login', schemaValidation(userSchema), authController.login)
authRouter.post('/token', tokenValidation, (req, res) => res.sendStatus(200))

export default authRouter