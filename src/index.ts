import express from 'express'
import booksRouter from './router/booksRouter'
import { errorHandler } from './middleware/errorHandler'
import ErrorHandler from './utils/ErrorHandler'
import cors from 'cors'

const app = express()
const port = 8000

const allowedOrigins = [
    'http://localhost:8080',
    'https://front-challenge-jade.vercel.app',
    'https://main--front-bookstore-challenge.netlify.app/',
]

app.use(express.json())
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
    })
)

app.use('/books', booksRouter)

app.use((_req, _res, next) => {
    next(new ErrorHandler('Route not found', 404))
})

app.use(errorHandler)

app.listen(port, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`)
})
