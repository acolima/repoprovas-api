import { Request, Response } from 'express'
import * as testService from '../services/testService.js'

export async function getTests(req: Request, res: Response) {
  let tests = []
  
  if(req.path === '/tests/instructor'){
    tests = await testService.getByInstructor()
  } else {
    tests = await testService.getByTerm()
  }

  res.send(tests)
}