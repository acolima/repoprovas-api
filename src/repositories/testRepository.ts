import { prisma } from '../db.js'

export async function getInstructor() {
  return await prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
    },
  })
}

export async function getCategories(instructorId: number) {
  const tests = await prisma.category.findMany({
    select:{
      id: true,
      name: true,
      tests: {
        where: {
          teachersDisciplines:{
            teacherId: instructorId
          }
        },
        select:{
          id: true,
          name: true,
          pdfUrl: true,
          teachersDisciplines: {
            select: {
              disciplines: {
                select:{
                  name: true
                }
              }
            }
          }
        }
      }
    }
  })
  
  return tests
}