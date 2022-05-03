import * as disciplineRepository from '../repositories/disciplineRepository.js'

export async function getDisciplines() {
	return await disciplineRepository.get()
}
