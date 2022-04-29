import { Request, Response } from 'express'
import * as categoryService from '../services/categoryService.js'

export async function getCategories(req: Request, res: Response){
  const categories = await categoryService.get()


  res.status(200).send(categories)
}