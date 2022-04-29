import * as disciplineRepository from '../repositories/disciplineRepository.js'

export async function getCategories() {
  return await disciplineRepository.get()
}