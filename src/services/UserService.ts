import prisma from '../prisma'

export interface UserCreateInput {
  name: string,
  email: string,
  password: string
  posts: PostCreateInput
  profile?: ProfileCreateInput
}

interface PostCreateInput {
  title: string,
  content: string
}

interface ProfileCreateInput {
  bio: string
}


const createUser = () => {
  prisma.user.create({
    data: {
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