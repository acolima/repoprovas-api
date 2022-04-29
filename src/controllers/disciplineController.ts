import { Request, Response } from 'express'
import * as disciplineService from '../services/disciplineService.js'

export async function getDisciplineCategories(req: Request, res: Response) {
  const disciplines = await disciplineService.getCategories()
  res.status(200).send(disciplines)
}