import * as testRepository from '../repositories/testRepository.js'
import * as instructorRepository from '../repositories/instructorRepository.js'
import * as error from '../utils/errorUtils.js'

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

export async function getInstructorTests(id: number) {
  const instructor = await instructorRepository.findById(id)
  
  if(!instructor) throw error.notFound('Instrutor não encontrado')

  const tests = await testRepository.getInstructorTests(id)

  return tests
}