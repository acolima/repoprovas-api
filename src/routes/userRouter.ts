import { Router } from 'express'
import * as userController from '../controllers/userController.js'
import { schemaValidation } from '../middlewares/schemaValidationMiddleware.js'
import userSchema from '../schemas/userSchema.js'

const userRouter = Router()

userRouter.post('/sign-up', schemaValidation(userSchema), userController.create)
userRouter.post('/login', schemaValidation(userSchema), userController.login)
userRouter.delete('/logout/:id', userController.logout)

export default userRouter