import { Router } from 'express';
import authRouter from './authRouter.js';
import categoryRouter from './categoryRouter.js';
import disciplineRouter from './disciplineRouter.js';
import instructorRouter from './instructorRouter.js';
import testRouter from './testRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/disciplines', disciplineRouter);
router.use('/instructors', instructorRouter);
router.use('/tests', testRouter);
router.use('/users', userRouter);

export default router;
