import supertest from 'supertest'
import app from '../src'
import { userBodyFactory, userFactory } from './factories/userFactory.js'
import { truncateUsers, disconnect, findUsersByEmail} from './utils/testsUtils'

describe('/POST sign-up', () => {
  beforeEach(truncateUsers)

  afterAll(disconnect)
  
  it('should return status 422 given a invalid body', async () => {
    const body = {email: 123, password: 123}
    
    const response = await supertest(app).post('/sign-up').send(body)

    expect(response.status).toEqual(422)
  })

  it('should return status 422 given a empty body', async () => {
    const body = {}
    
    const response = await supertest(app).post('/sign-up').send(body)

    expect(response.status).toEqual(422)
  })

  it('should return status 409 given duplicated email', async () => {
    const body = userBodyFactory()
    await userFactory(body)

    const response = await supertest(app).post('/sign-up').send(body)

    const users = await findUsersByEmail(body.email)

    expect(response.status).toEqual(409)
    expect(users.length).toBe(1)
  })

  it('should return status 201 and persist user given valid body', async () => {
    const body = userBodyFactory()

    const response = await supertest(app).post('/sign-up').send(body)
    
    const user = await findUsersByEmail(body.email)

    expect(response.status).toEqual(201)
    expect(user.length).toEqual(1)
  }) 
})