import { prisma } from '../db.js'

export async function getInstructor() {
  return await prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
    },
  })
}

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