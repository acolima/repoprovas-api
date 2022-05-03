import { userBodyFactory } from './userBodyFactory.js'
import { userFactory } from './userFactory.js'
import jwt from 'jsonwebtoken'

export async function tokenFactory() {
	const user = userBodyFactory()
	const createdUser = await userFactory(user)

	const token = jwt.sign({ userId: createdUser.id }, process.env.JWT_SECRET)

	return token
}
