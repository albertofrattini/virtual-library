import type { Context } from 'koa'
import compose from 'koa-compose'

export const getAll = compose([
    () => console.log('validation'),
    async (ctx: Context): Promise<void> => {
        ctx.body = ['user1', 'user2']
        ctx.status = 200
    }
])