import { faker } from '@faker-js/faker'
import jwt from 'jsonwebtoken'

export function randomTokenFactory() {
	const randomNumber = faker.datatype.number({ max: 1000000 })

	const token = jwt.sign({ userId: randomNumber }, process.env.JWT_SECRET)

	return token
}
