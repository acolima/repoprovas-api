import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as error from '../utils/errorUtils.js'
import * as userRepository from '../repositories/userRepository.js'
import { CreateUser } from '../repositories/userRepository.js'

export async function login(userData: CreateUser) {
  const { email, password } = userData

  const user = await userRepository.findByEmail(email)

  if(!user) throw error.unauthorized('Email e/ou senha incorretos')

  if(!bcrypt.compareSync(password, user.password))
    throw error.unauthorized('Email e/ou senha incorretos')

  const data = {userId: user.id}
  const secretKey = process.env.JWT_SECRET
  const token = jwt.sign(data, secretKey, { expiresIn: 60*60*24 })

  return {token}
}