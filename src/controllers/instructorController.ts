import { Request, Response } from 'express'
import * as instructorService from '../services/instructorService.js'

export async function getByDiscipline(req: Request, res: Response) {
  const { disciplineId } = req.params

  const instructors = await instructorService.findByDiscipline(Number(disciplineId))

  res.send(instructors)
}
