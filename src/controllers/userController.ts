import { Request, Response } from 'express'
import * as userService from '../services/userService.js'

export async function create(req: Request, res: Response) {
  await userService.create(req.body)

  res.sendStatus(201)
}

export async function login(req: Request, res: Response) {
  const auth = await userService.login(req.body)

  res.status(200).send(auth)
}

export async function logout(req: Request, res: Response) {
  const { id: userId } = req.params

  await userService.logout(Number(userId))

  res.sendStatus(200)
}