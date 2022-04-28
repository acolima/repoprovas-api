import { faker } from '@faker-js/faker'
import { prisma } from '../../src/db.js'
import { CreateUser } from '../../src/repositories/userRepository'
import bcrypt from 'bcrypt'

export function userBodyFactory() {
  const body: CreateUser = {
    email: faker.internet.email(),
    password: faker.internet.password()
  }

    return body
}

export async function userFactory(user: CreateUser) {
  await prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 8)
    }
  })
}

