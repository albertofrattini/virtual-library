import type { Context } from 'koa'
import compose from 'koa-compose'

export const getAll = compose([
    () => console.log('validation'),
    async (ctx: Context): Promise<void> => {
        ctx.body = ['book1', 'book2']
        ctx.status = 200
    }
])