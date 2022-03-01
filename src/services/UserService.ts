import prisma from '../prisma'
import { Prisma } from "@prisma/client"

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
  return prisma.user.create({
    data: userData
  })
}

export default {
  createUser,
}