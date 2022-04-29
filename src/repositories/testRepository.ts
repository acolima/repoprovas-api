import { prisma } from '../db.js'
import { Test } from '@prisma/client'

export type CreateTest = Omit<Test, 'id'>

export async function getInstructorTests(instructorId: number) {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      tests: {
        where: {
          teachersDisciplines: {
            teacherId: instructorId
          }
        },
        select: {
          id: true,
          name: true,
          pdfUrl: true,
          teachersDisciplines: {
            select: {
              disciplines: {
                select: { name: true }
              }
            }
          }
        }
      }
    }
  })
}

export async function getDisciplinesByTerms() {
	return await prisma.term.findMany({
		select: {
			id: true,
			number: true,
			disciplines: {
				select: {
					id: true,
					name: true,
				}
			}
		}
	})
}

export async function getTestsByDiscipline(disciplineId: number) {
	return await prisma.category.findMany({
		select: {
			id: true,
			name: true,
			tests: {
				where: {
					disciplineId,
				},
				select: {
					id: true,
					name: true,
					pdfUrl: true,
					teachersDisciplines: {
						select: {
							teachers: {
								select: { name: true }
							}
						}
					}
				}
			}
		}
	})
}

export async function createTest(test: CreateTest) {
  await prisma.test.create({
    data: test
  })
}