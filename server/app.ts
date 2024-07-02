import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { invoicesRoute, itemsRoute, addressesRoute, usersRoute } from './routes'

const app = new Hono()

app.use(logger())

const apiRoutes = app
  .basePath('/api/v1')
  .get('/api/v1', (c) => c.json({ message: 'Hello, World!' }))
  .route('/invoices', invoicesRoute)
  .route('/users', usersRoute)
  .route('/items', itemsRoute)
  .route('/addresses', addressesRoute)

export default app
export type ApiRoutes = typeof apiRoutes
