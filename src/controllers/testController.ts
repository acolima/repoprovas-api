import { Request, Response } from 'express'
import * as testService from '../services/testService.js'

export async function getTests(req: Request, res: Response) {
	let tests = []

	if (req.path === '/instructors') {
		tests = await testService.getTestsByInstructor()
	} else {
		tests = await testService.getTestsByTerm()
	}

	res.status(200).send(tests)
}

export async function createTest(req: Request, res: Response) {
	const test = req.body

	await testService.createNewTest(test)

	res.sendStatus(201)
}

export async function updateViewsCount(req: Request, res: Response) {
	const { id } = req.params

	const response = await testService.updateViewsCount(Number(id))

	res.status(200).send(response)
}
