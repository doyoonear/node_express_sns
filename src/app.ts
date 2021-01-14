import express, { Express, ErrorRequestHandler, Request, Response, NextFunction} from 'express'
import { ErrorWithStatusCode } from './errors/errorGenerator'
import morgan from 'morgan'
import routes from './routes'

const logger = morgan('dev')

const app: Express = express()

app.use(express.json())
app.use(logger)
app.use(routes)

const generalErrorHandler: ErrorRequestHandler = (err: ErrorWithStatusCode, req: Request, res: Response, next: NextFunction) => {
  const { message, statusCode } = err
  console.error(err)
  res.status(statusCode || 500).json({ message })
}

app.use(generalErrorHandler)

export default app