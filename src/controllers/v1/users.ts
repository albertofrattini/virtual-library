import type { Context } from 'koa'
import compose from 'koa-compose'
import { getAllUsers } from '../../operations/v1/users'

export const getAll = compose([
    async (ctx: Context): Promise<void> => {
        ctx.body = await getAllUsers()
        ctx.status = 200
    }
])