import { prisma } from '../db.js'

export async function get(){
  return await prisma.teacher.findMany({})
}

export async function findById(id: number) {
  return await prisma.teacher.findUnique({
    where: { id }
  })
}