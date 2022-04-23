import '../setup.js'
import { NextFunction, Request, Response } from 'express'
import * as error from '../utils/errorUtils.js'
import * as userService from '../services/userService.js'
import jwt from 'jsonwebtoken'

export async function tokenValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization

  if (!authorization){
    throw error.unauthorized('Invalid Token')
  } 
  
  const token = authorization.replace('Bearer ', '')
  const secretKey = process.env.JWT_SECRET
  const { userId } = jwt.verify(token, secretKey) as { userId: number}
  
  const user = await userService.findById(userId)

  res.locals.user = user

  next()
}