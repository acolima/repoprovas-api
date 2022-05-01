import joi from 'joi'
import { NewTest } from '../services/testService'

const testSchema = joi.object<NewTest>({
  name: joi.string().required(),
  pdfUrl: joi.string().required(),
  category: joi.string().required(),
  discipline: joi.string().required(),
  instructor: joi.string().required(),
})

export default testSchema