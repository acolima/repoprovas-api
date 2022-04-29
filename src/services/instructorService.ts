import * as instructorRepository from '../repositories/instructorRepository.js'

export async function get(){
  const instructors = await instructorRepository.get()

  return instructors
}

export async function findByDiscipline(disciplineId: number){
  return await instructorRepository.findByDiscipline(disciplineId)
}