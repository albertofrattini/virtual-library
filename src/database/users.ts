import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async () => {
    try {
        const allUsers = await prisma.user.findMany()
        return allUsers
    } catch(e) {
        console.log(e.message)
    }
}
