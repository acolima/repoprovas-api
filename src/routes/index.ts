import { Router } from 'express'
import authRouter from './authRouter.js'
import categoryRouter from './categoryRouter.js'
import disciplineRouter from './disciplineRouter.js'
import instructorRouter from './instructorRouter.js'
import testRouter from './testRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(authRouter)
router.use(categoryRouter)
router.use(disciplineRouter)
router.use(instructorRouter)
router.use('/tests', testRouter)
router.use(userRouter)

export default router