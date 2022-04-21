import joi from 'joi'

const userSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().min(6).required()
})

export default userSchema