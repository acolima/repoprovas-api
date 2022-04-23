import { Router } from 'express'
import authRouter from './authRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(userRouter)
router.use(authRouter)

export default router