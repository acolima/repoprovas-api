import { Request, Response, NextFunction } from 'express'
import * as error from '../utils/errorUtils.js'

export function schemaValidation(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
    if (validation.error)
    throw error.unprocessableEntity(validation.error.message)

    next()
  }
}