import * as instructorRepository from '../repositories/instructorRepository.js'

export async function getByDiscipline(disciplineId: number) {
	return await instructorRepository.findByDisciplineId(disciplineId)
}
