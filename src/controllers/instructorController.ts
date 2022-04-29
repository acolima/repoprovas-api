import { Request, Response } from 'express'
import * as instructorService from '../services/instructorService.js'

export async function getInstructors(req: Request, res: Response) {
  const instructors = await instructorService.get()

  res.send(instructors)
}

export async function getByDiscipline(req: Request, res: Response) {
  const { disciplineId } = req.params

  const instructors = await instructorService.findByDiscipline(Number(disciplineId))

  res.send(instructors)
}
