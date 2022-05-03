import { faker } from '@faker-js/faker'
import { CreateUser } from '../../src/repositories/userRepository'

export function userBodyFactory() {
  const body: CreateUser = {
    email: faker.internet.email(),
    password: faker.internet.password()
  }

  return body
}