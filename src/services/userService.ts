import bcrypt from 'bcrypt'
import * as error from '../utils/errorUtils.js'
import * as userRepository from '../repositories/userRepository.js'
import { CreateUser } from '../repositories/userRepository.js'

export async function create(userData: CreateUser) {
  const { email, password } = userData
  
  const emailInUse = await userRepository.findByEmail(email)
  if(emailInUse) throw error.conflict('Email já está em uso')

  const hashedPassword = bcrypt.hashSync(password, 10)

  await userRepository.insert({ email, password: hashedPassword })
}

export async function findById(userId: number) {
  const user = await userRepository.findById(userId)
  if(!user) throw error.notFound('User not found')

  return user
}