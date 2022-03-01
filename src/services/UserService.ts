import prisma from '../prisma'
import { Prisma } from '@prisma/client'

const userData: Prisma.UserCreateInput = {
  name: 'Alice',
  email: 'alice@prisma.io',
  password: 'zz',
  posts: {
    create: { 
      title: 'Hello World'
    },
  },
  profile: {
    create: { bio: 'I like turtles' },
  },
}

const createUser = () => {
  prisma.user.create({
    data: userData
  })
}

const findAllUsers = ()=> {
  prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  })
} 


export default {
  createUser,
}