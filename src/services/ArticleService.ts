import prisma from '../prisma'
import { Article } from '../utils'

const ARTICLES_DEFAULT_OFFSET = 0
const ARTICLES_DEFAULT_LIMIT = 5

const findArticles = (query) => {
  const { offset, limit, ...fields } = query
  const where = Article.makeQueryOption(fields)

  return prisma.articles.findMany({
    where,
    skip: Number(offset) || ARTICLES_DEFAULT_OFFSET,
    take: Number(limit) || ARTICLES_DEFAULT_LIMIT,
    orderBy: {
      created_at: 'desc',
    },
  })
}