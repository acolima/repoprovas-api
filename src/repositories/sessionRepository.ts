import { Session } from '@prisma/client'
import { prisma } from '../db.js'

type NewSession = Omit<Session, 'id'>

export async function insert(newSession: NewSession) {
  const session = await prisma.session.create({
    data: newSession
  })

  return session
}

export async function findByUserId(userId: number) {
  const session = await prisma.session.findMany({
    where: { userId }
  })

  return session
}

export async function deleteSession(userId: number) {
  await prisma.session.deleteMany({
    where: { userId }
  })
}