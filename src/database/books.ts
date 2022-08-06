import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    try {
        const allBooks = await prisma.book.findMany()
        return allBooks
    } catch(e) {
        console.log(e.message)
    }
}
