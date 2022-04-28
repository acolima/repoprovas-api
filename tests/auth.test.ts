import supertest from 'supertest'
import app from '../src'
import { userBodyFactory, userFactory } from './factories/userFactory.js'
import { disconnect, truncateUsers } from './utils/testsUtils'

describe('/POST login', () => {
  beforeEach(truncateUsers)

  afterAll(disconnect)

  it('should return status 422 given a invalid body', async () => {
    const body = {}
    
    const response = await supertest(app).post('/login').send(body)
  
    expect(response.status).toEqual(422)
  })

  it('should return status 401 given incorrect email', async () => {
    const body = userBodyFactory()

    const response = await supertest(app).post('/login').send(body)

    expect(response.status).toEqual(401)
  })

  it('should return status 401 given incorrect password', async () => {
    const body = userBodyFactory()
    await userFactory(body)

    const response = await supertest(app).post('/login').send({
      ...body, password: '123456'
    })

    expect(response.status).toEqual(401)
  })

  it('should return status 200 and credentials given valid body', async () => {
    const body = userBodyFactory()
    await userFactory(body)

    const response = await supertest(app).post('/login').send(body)

    expect(response.status).toEqual(200)
    expect(response.body.token).not.toBeNull()
  })
})