import { UserService } from '../services'
import { errorWrapper, errorGenerator } from '../errors'
import { Request, Response } from 'express'

// TODO: login auth
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// const { AUTH_TOKEN_SALT } = process.env

const mockDataForSignUp = {
  name: 'Zyaa',
  email: 'zyaa@prisma.io',
  password: 'wrwrwqq',
  posts: {
    create: { 
      title: `Today's Look`
    },
  },
  profile: {
    create: { bio: 'I like caps, hoodies' },
  },
}


const signUp = errorWrapper(async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  if (!email) errorGenerator({ statusCode: 400 });

  const createdUser = await UserService.createUser({
    name, email, password
  });

  return res.status(201).json({
    message: 'user created',
    email: createdUser.email,
  })
})

export default {
  signUp,
}
