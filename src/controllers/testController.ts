import { Request, Response } from 'express'
import * as testService from '../services/testService.js'

export async function getByInstructor(req: Request, res: Response) {
  const tests = await testService.getByInstructor()

  res.send(tests)
}