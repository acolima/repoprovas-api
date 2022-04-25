import * as testRepository from '../repositories/testRepository.js'

export async function getByInstructor() {
  const instructors = await testRepository.getInstructor()
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

export async function getByTerm() {
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