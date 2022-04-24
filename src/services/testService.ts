import * as testRepository from '../repositories/testRepository.js'

export async function getByInstructor(){
  const teachers = await testRepository.getInstructor()

  const tests = []

  for(const teacher of teachers){
    const categories = await testRepository.getCategories(teacher.id)
    
    const testsObject = {
      instructorName: teacher.name,
      categories
    }

    tests.push(testsObject)
  }

  return tests
}