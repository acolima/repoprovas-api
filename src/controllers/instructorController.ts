import { Request, Response } from 'express'
import * as instructorService from '../services/instructorService.js'

export async function getInstructors(req: Request, res: Response) {
  const instructors = await instructorService.get()

  res.send(instructors)
}