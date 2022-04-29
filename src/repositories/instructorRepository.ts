import { prisma } from '../db.js'

export async function get(){
  return await prisma.teacher.findMany({})
}

export async function findById(id: number) {
  return await prisma.teacher.findUnique({
    where: { id }
  })
}

export async function findByDiscipline(disciplineId: number) {
  return await prisma.teacher.findMany({
    select: {
      id: true,
      name: true
    },
    where: {
      teachersDisciplines: {
        some: {
          disciplineId
        }
      }
    }
  })
}

export async function findByName(name: string) {
  return prisma.teacher.findUnique({
    where: { name }
  })
}

export async function getTeacherDiscipline(disciplineId: number, teacherId: number) {
  return prisma.teachersDisciplines.findFirst({
    where: { disciplineId, teacherId }
  })
}