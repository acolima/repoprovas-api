import { prisma } from '../db.js'

export async function get() {
  return prisma.category.findMany({})
}

export async function findByName(name: string) {
  return prisma.category.findUnique({
    where: { name }
  })
}