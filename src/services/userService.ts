import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import '../setup.js'
import * as error from '../utils/errorUtils.js'
import * as userRepository from '../repositories/userRepository.js'
import * as sessionRepository from '../repositories/sessionRepository.js'
import { CreateUser } from '../repositories/userRepository.js'

export async function create(userData: CreateUser) {
  const { email, password } = userData
  
  const emailInUse = await userRepository.findByEmail(email)
  if(emailInUse) throw error.conflict('Email já está em uso')

  const hashedPassword = bcrypt.hashSync(password, 10)

  await userRepository.insert({ email, password: hashedPassword })
}

export async function login(userData: CreateUser) {
  const { email, password } = userData

  const user = await userRepository.findByEmail(email)

  if(!user) throw error.unauthorized('Email e/ou senha incorretos')

  if(!bcrypt.compareSync(password, user.password))
    throw error.unauthorized('Email e/ou senha incorretos')

  const secretKey = process.env.JWT_SECRET
  // todo: configuração de expiração do token
  const token = jwt.sign(email, secretKey)

  await sessionRepository.insert({token, userId: user.id})

  return {token}
}