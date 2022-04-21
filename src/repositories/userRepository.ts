import { prisma } from '../db.js'
import { User } from '@prisma/client'

export type CreateUser = Omit<User, "id">

export async function findByEmail(email: string){
  const result = await prisma.user.findFirst({
    where: {
      email
    }
  })

  return result
}

export async function insert(user: CreateUser) {
  await prisma.user.create({
    data: user
  })
}