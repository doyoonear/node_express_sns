import jwt from 'jsonwebtoken'
import { errorGenerator, errorWrapper } from '../errors'
import { UserService } from '../services'
import { Express, Request, Response, NextFunction } from 'express'

const { AUTH_TOKEN_SALT } = process.env

export interface Token {
  id: number
}

const validateToken = errorWrapper(async (req: Request, res: Response, next: NextFunction) => {
})

export default validateToken