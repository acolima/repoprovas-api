import { prisma } from '../../src/db.js'

export async function truncateUsers() {
	await prisma.$executeRaw`TRUNCATE TABLE users`
}

export async function truncateTests() {
	await prisma.$executeRaw`TRUNCATE TABLE tests`
}

export async function disconnect() {
	await prisma.$disconnect()
}

export async function findUsersByEmail(email: string) {
	return await prisma.user.findMany({
		where: { email }
	})
}
