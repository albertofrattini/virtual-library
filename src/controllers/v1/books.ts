import type { Context } from 'koa'
import compose from 'koa-compose'
import { getAllBooks } from '../../operations/v1/books'

export const getAll = compose([
    async (ctx: Context): Promise<void> => {
        ctx.body = await getAllBooks()
        ctx.status = 200
    }
])