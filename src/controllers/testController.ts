import { Request, Response } from 'express'
import * as testService from '../services/testService.js'

export async function getTests(req: Request, res: Response) {
  let tests = []
  
  if(req.path === '/instructor'){
    tests = await testService.getTestsByInstructor()
  } else {
    tests = await testService.getTestsByTerm()
  }

  res.send(tests)
}

export async function getInstructorTests(req: Request, res: Response) {
  const id = req.params.id

  const tests = await testService.getInstructorTests(Number(id))

  res.send(tests)
}

export async function postTest(req: Request, res: Response) {
  const test = req.body

  await testService.createNewTest(test)

  res.sendStatus(201)
}