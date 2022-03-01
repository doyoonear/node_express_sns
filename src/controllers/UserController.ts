import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserService } from '../services'
import { errorWrapper, errorGenerator } from '../errors'
import { Request, Response } from 'express'
const { AUTH_TOKEN_SALT } = process.env

const signUp = errorWrapper(async (req: Request, res: Response) => {
  await UserService.createUser();
})

const logIn = errorWrapper(async (req: Request, res: Response) => {
})

export default {
  logIn,
  signUp,
}
