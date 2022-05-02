import * as instructorRepository from '../repositories/instructorRepository.js'

export async function findByDiscipline(disciplineId: number){
  return await instructorRepository.findByDiscipline(disciplineId)
}