import { UserService } from '../services'
import { errorWrapper, errorGenerator } from '../errors'
import { Request, Response } from 'express'

// TODO: login auth
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// const { AUTH_TOKEN_SALT } = process.env

const signUp = errorWrapper(async (req: Request, res: Response) => {
  console.log('signUp controller');
  console.log(req.body)
  const createdUser = await UserService.createUser();

  return res.status(201).json({
    message: 'user created',
    email: createdUser.email,
  })
})

export default {
  signUp,
}
