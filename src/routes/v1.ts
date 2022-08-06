import type { Context } from 'koa'
import Router from 'koa-router'
import * as controller from '../controllers/v1'

const router = new Router<{}, Context>()
router.prefix('/v1')

/* ----- users ----- */
router.get('/users', controller.users.getAll)

/* ----- books ----- */
router.get('/books', controller.books.getAll)

export const v1Routes = router.routes()
