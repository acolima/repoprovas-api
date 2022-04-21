import { Session } from '@prisma/client'
import { prisma } from '../db.js'

type NewSession = Omit<Session, 'id'>

export async function insert(session: NewSession) {
  await prisma.session.create({
    data: session
  })
}