import { Request, Response } from 'express'
import * as authService from '../services/authService.js'

export async function login(req: Request, res: Response) {
  const auth = await authService.login(req.body)

  res.status(200).send(auth)
}