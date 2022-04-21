import { Router } from 'express'
import * as userController from '../controllers/userController.js'
import { schemaValidation } from '../middlewares/schemaValidationMiddleware.js'
import userSchema from '../schemas/userSchema.js'

const userRouter = Router()

userRouter.post("/sign-up", schemaValidation(userSchema), userController.create)

export default userRouter