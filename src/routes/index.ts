import { Router } from 'express'
import authRouter from './authRouter.js'
import instructorRouter from './instructorRouter.js'
import testRouter from './testRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(userRouter)
router.use(authRouter)
router.use('/tests', testRouter)
router.use(instructorRouter)

export default router