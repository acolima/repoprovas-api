import * as instructorRepository from '../repositories/instructorRepository.js'

export async function get(){
  const instructors = await instructorRepository.get()

  return instructors
}