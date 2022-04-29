import { prisma } from '../db.js'

export async function get() {
  return await prisma.discipline.findMany({
    select: {
      id: true,
      name: true
    }
  })
}

export async function findByName(name: string) {
  return prisma.discipline.findUnique({
    where: { name }
  })
}