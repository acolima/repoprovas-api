import { prisma } from '../../src/db.js'
import { Response } from 'supertest'

export async function findUsersByEmail(email: string) {
	return await prisma.user.findMany({
		where: { email },
	})
}

export async function findTestByName(name: string) {
	return await prisma.test.findFirst({
		where: { name },
	})
}

export async function findDiscipline() {
	return await prisma.discipline.findFirst({})
}

export function expectedResponseToValidToken(response: Response) {
	expect(response.body.length).toBeGreaterThanOrEqual(0)
	expect(response.status).toBe(200)
}
