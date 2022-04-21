import express, { json } from 'express'
import 'express-async-errors'
import cors from 'cors'
import './setup.js'
import router from './routes/index.js'
import handleErrors from './middlewares/errorHandlerMiddleware.js'

const app = express()

app.use(cors())
app.use(json())
app.use(router)
app.use(handleErrors)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running in ${PORT}`))