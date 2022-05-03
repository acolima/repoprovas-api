import { prisma } from '../../src/db.js'
import { CreateUser } from '../../src/repositories/userRepository'
import bcrypt from 'bcrypt'

export async function userFactory(user: CreateUser) {
  return await prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 8)
    }
  })
}

