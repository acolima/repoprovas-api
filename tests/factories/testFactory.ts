import { prisma } from '../../src/db.js'
import { NewTest } from '../../src/services/testService.js'

export async function testFactory(test: NewTest) {
	const category = await prisma.category.findUnique({
		where: { name: test.category }
	})
	const discipline = await prisma.discipline.findUnique({
		where: { name: test.discipline }
	})
	const teacher = await prisma.teacher.findUnique({
		where: { name: test.instructor }
	})
	const teacherDiscipline = await prisma.teachersDisciplines.findFirst({
		where: { disciplineId: discipline.id, teacherId: teacher.id }
	})

	return await prisma.test.create({
		data: {
			name: test.name,
			pdfUrl: test.pdfUrl,
			categoryId: category.id,
			disciplineId: discipline.id,
			teacherDisciplineId: teacherDiscipline.id
		}
	})
}
