import prisma from '../prisma'
import { Prisma } from "@prisma/client"

const createUser = (payload: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data: payload
  })
}

export default {
  createUser,
}