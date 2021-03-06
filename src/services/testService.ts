import { CreateTest } from '../repositories/testRepository.js'
import * as categoryRepository from '../repositories/categoryRepository.js'
import * as disciplineRepository from '../repositories/disciplineRepository.js'
import * as instructorRepository from '../repositories/instructorRepository.js'
import * as testRepository from '../repositories/testRepository.js'

export interface NewTest {
  name: string,
  pdfUrl: string,
  category: string, 
  discipline: string,
  instructor: string
}

export async function getTestsByInstructor() {
  const instructors = await instructorRepository.get()

  const tests = []

  for (const instructor of instructors) {
    const instructorTests = await testRepository.getInstructorTests(instructor.id)

    const testsObject = {
      instructorId: instructor.id,
      instructorName: instructor.name,
      categories: instructorTests,
    }

    tests.push(testsObject)
  }

  return tests
}

export async function getTestsByTerm() {
	const terms = await testRepository.getDisciplinesByTerms()

	const array = []

	for (const term of terms) {
		let tests = []
		for (const discipline of term.disciplines) {
			tests.push({
				disciplineId: discipline.id,
				disciplineName: discipline.name,
				tests: await testRepository.getTestsByDiscipline(discipline.id)
			})
		}

		const result = {
			termId: term.id,
			termName: term.number,
			disciplines: tests
		}

		array.push(result)
	}

	return array
}

export async function createNewTest(test: NewTest) {
  
  const category = await categoryRepository.findByName(test.category)
  const discipline = await disciplineRepository.findByName(test.discipline)
  const instructor = await instructorRepository.findByName(test.instructor)

  const teacherDiscipline = await instructorRepository.getTeacherDiscipline(discipline.id, instructor.id)

  const newTest: CreateTest = {
    name: test.name,
    pdfUrl: test.pdfUrl,
    categoryId: category.id,
    disciplineId: discipline.id,
    teacherDisciplineId: teacherDiscipline.id
  }

  await testRepository.createTest(newTest)
}

export async function updateViewsCount(id: number) {
  const response = await testRepository.updateViews(id)
  
  return response
}