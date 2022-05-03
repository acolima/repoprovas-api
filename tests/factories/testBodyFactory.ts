import { NewTest } from '../../src/services/testService.js'
import { faker } from '@faker-js/faker'

export function testBodyFactory() {
	const test: NewTest = {
		name: faker.lorem.words(),
		pdfUrl: faker.internet.url(),
		category: 'P1',
		discipline: 'Cálculo 1',
		instructor: 'Maria'
	}

	return test
}
