import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/errorUtils.js'

export default function handleErrors(
  error: Error | AppError, req: Request, res: Response, next: NextFunction
) {

  if('type' in error){
    switch(error.type){
      case('unprocessable_entity'): return res.status(422).send(error.message)
      case('conflict'): return res.status(409).send(error.message)
      case('unauthorized'): return res.status(401).send(error.message)
      case('not_found'): return res.status(404).send(error.message)
    }
  }
  console.log(error)
  res.sendStatus(500)
}