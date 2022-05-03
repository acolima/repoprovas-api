import { Request, Response } from 'express'
import * as instructorService from '../services/instructorService.js'

export async function getInstructorByDiscipline(req: Request, res: Response) {
	const { disciplineId } = req.params

	const instructors = await instructorService.getByDiscipline(
		Number(disciplineId)
	)

	res.status(200).send(instructors)
}
