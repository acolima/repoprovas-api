import supertest from 'supertest'
import app from '../src'
import {
	truncateUsers,
	disconnect,
	findUsersByEmail,
	truncateTests
} from './utils/testsUtils'
import { prisma } from '../src/db.js'
import { userFactory } from './factories/userFactory.js'
import { userBodyFactory } from './factories/userBodyFactory.js'
import { tokenFactory } from './factories/tokenFactory'
import { randomTokenFactory } from './factories/randomTokenFactory'
import { expiredTokenFactory } from './factories/expiredTokenFactory'
import { testBodyFactory } from './factories/testBodyFactory'
import { testFactory } from './factories/testFactory'

describe('POST /sign-up', () => {
	beforeEach(truncateUsers)
	afterAll(disconnect)

	it('should return status 201 and persist user given valid body', async () => {
		const user = userBodyFactory()

		const response = await supertest(app).post('/sign-up').send(user)

		const userCreated = await findUsersByEmail(user.email)

		expect(response.status).toBe(201)
		expect(userCreated.length).toEqual(1)
	})

	it('should return status 409 given duplicated email', async () => {
		const user = userBodyFactory()
		await userFactory(user)

		const response = await supertest(app).post('/sign-up').send(user)

		const users = await findUsersByEmail(user.email)

		expect(response.status).toBe(409)
		expect(users.length).toBe(1)
	})

	it('should return status 422 given invalid body', async () => {
		const user = { email: 123, password: 123 }

		const response = await supertest(app).post('/sign-up').send(user)

		expect(response.status).toBe(422)
	})
})

describe('POST /login', () => {
	beforeEach(truncateUsers)
	afterAll(disconnect)

	it('should return status 200 and credentials given valid body', async () => {
		const user = userBodyFactory()
		await userFactory(user)

		const response = await supertest(app).post('/login').send(user)

		expect(response.status).toBe(200)
		expect(response.body.token).not.toBeNull()
	})

	it('should return status 401 given incorrect email', async () => {
		const user = userBodyFactory()

		const response = await supertest(app).post('/login').send(user)

		expect(response.status).toBe(401)
	})

	it('should return status 401 given incorrect password', async () => {
		const user = userBodyFactory()
		await userFactory(user)

		const response = await supertest(app)
			.post('/login')
			.send({
				...user,
				password: '123456'
			})

		expect(response.status).toBe(401)
	})

	it('should return status 422 given invalid body', async () => {
		const user = {}

		const response = await supertest(app).post('/login').send(user)

		expect(response.status).toBe(422)
	})
})

describe('POST /token', () => {
	it('should return status 200 given valid token', async () => {
		const token = await tokenFactory()

		const response = await supertest(app)
			.post('/token')
			.set('Authorization', token)

		expect(response.status).toBe(200)
	})

	it('should return status 401 given invalid token format', async () => {
		const response = await supertest(app)
			.post('/token')
			.set('Authorization', '')

		expect(response.status).toBe(401)
	})

	it("should return status 404 given token does't belong to a registered user", async () => {
		const token = randomTokenFactory()

		const response = await supertest(app)
			.post('/token')
			.set('Authorization', token)

		expect(response.status).toBe(404)
	})

	it('should return status 500 given expired token', async () => {
		const expiredToken = expiredTokenFactory()

		const response = await supertest(app)
			.post('/token')
			.set('Authorization', expiredToken)

		expect(response.status).toBe(500)
	})
})

describe('Tests routes', () => {
	beforeEach(truncateTests)
	afterAll(disconnect)

	describe('GET /tests/instructors', () => {
		it('should return status 200 and an object given valid token', async () => {
			const token = await tokenFactory()

			const response = await supertest(app)
				.get('/tests/instructors')
				.set('Authorization', token)

			expect(response.body.length).toBeGreaterThanOrEqual(0)
			expect(response.status).toBe(200)
		})

		it('should return status 401 given invalid token', async () => {
			const response = await supertest(app)
				.get('/tests/instructors')
				.set('Authorization', '')

			expect(response.status).toBe(401)
		})

		it("should return status 404 given token does't belong to a registered user", async () => {
			const token = randomTokenFactory()

			const response = await supertest(app)
				.get('/tests/instructors')
				.set('Authorization', token)

			expect(response.status).toBe(404)
		})

		it('should return status 500 given expired token', async () => {
			const expiredToken = expiredTokenFactory()

			const response = await supertest(app)
				.get('/tests/instructors')
				.set('Authorization', expiredToken)

			expect(response.status).toBe(500)
		})
	})

	describe('GET /tests/terms', () => {
		it('should return status 200 and an object given valid token', async () => {
			const token = await tokenFactory()

			const response = await supertest(app)
				.get('/tests/terms')
				.set('Authorization', token)

			expect(response.body.length).toBeGreaterThanOrEqual(0)
			expect(response.status).toBe(200)
		})

		it('should return status 401 given invalid token', async () => {
			const response = await supertest(app)
				.get('/tests/terms')
				.set('Authorization', '')

			expect(response.status).toBe(401)
		})

		it("should return status 404 given token does't belong to a registered user", async () => {
			const token = randomTokenFactory()

			const response = await supertest(app)
				.get('/tests/terms')
				.set('Authorization', token)

			expect(response.status).toBe(404)
		})

		it('should return status 500 given expired token', async () => {
			const expiredToken = expiredTokenFactory()

			const response = await supertest(app)
				.get('/tests/terms')
				.set('Authorization', expiredToken)

			expect(response.status).toBe(500)
		})
	})

	describe('POST /tests/create', () => {
		it('should return status 201 and persist the test given valid body and valid token', async () => {
			const test = testBodyFactory()

			const token = await tokenFactory()

			const response = await supertest(app)
				.post('/tests/create')
				.send(test)
				.set('Authorization', token)

			const createdPost = await prisma.test.findFirst({
				where: { name: test.name }
			})

			expect(response.status).toBe(201)
			expect(createdPost).not.toBe(null)
		})

		it('should return status 401 given invalid token', async () => {
			const response = await supertest(app)
				.post('/tests/create')
				.set('Authorization', '')

			expect(response.status).toBe(401)
		})

		it("should return status 404 given token doesn't belong to a registered user", async () => {
			const token = randomTokenFactory()

			const response = await supertest(app)
				.post('/tests/create')
				.set('Authorization', token)

			expect(response.status).toBe(404)
		})

		it('should return status 500 given expired token', async () => {
			const expiredToken = expiredTokenFactory()

			const response = await supertest(app)
				.post('/tests/create')
				.set('Authorization', expiredToken)

			expect(response.status).toBe(500)
		})

		it('should return status 422 given valid token but invalid body', async () => {
			const token = await tokenFactory()

			const response = await supertest(app)
				.post('/tests/create')
				.send({})
				.set('Authorization', token)

			expect(response.status).toBe(422)
		})
	})

	describe('PATCH /tests/:id/views', () => {
		it('should return status 200 and an object given valid token', async () => {
			const test = testBodyFactory()
			const createdTest = await testFactory(test)

			const token = await tokenFactory()

			const response = await supertest(app)
				.patch(`/tests/${createdTest.id}/views`)
				.set('Authorization', token)

			expect(response.status).toBe(200)
			expect(response.body).not.toBe(null)
		})

		it('should return status 401 given invalid token', async () => {
			const test = testBodyFactory()
			const createdTest = await testFactory(test)

			const response = await supertest(app)
				.patch(`/tests/${createdTest.id}/views`)
				.set('Authorization', '')

			expect(response.status).toBe(401)
		})

		it("should return status 404 given token doesn't belong to a registered user", async () => {
			const test = testBodyFactory()
			const createdTest = await testFactory(test)

			const token = randomTokenFactory()

			const response = await supertest(app)
				.patch(`/tests/${createdTest.id}/views`)
				.set('Authorization', token)

			expect(response.status).toBe(404)
		})

		it('should return status 500 given expired token', async () => {
			const test = testBodyFactory()
			const createdTest = await testFactory(test)

			const expiredToken = expiredTokenFactory()

			const response = await supertest(app)
				.patch(`/tests/${createdTest.id}/views`)
				.set('Authorization', expiredToken)

			expect(response.status).toBe(500)
		})
	})
})
