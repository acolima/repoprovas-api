import { Request, Response } from 'express'
import * as disciplineService from '../services/disciplineService.js'

export async function getDisciplines(req: Request, res: Response) {
	const disciplines = await disciplineService.getDisciplines()

	res.status(200).send(disciplines)
}
