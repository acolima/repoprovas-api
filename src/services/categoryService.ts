import * as categoriesRepository from '../repositories/categoryRepository.js'

export async function get(){
  return categoriesRepository.get()
}