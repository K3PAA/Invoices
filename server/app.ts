import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { invoicesRoute } from './routes/invoices'

const app = new Hono()

app.use(logger())

const apiRoutes = app
  .basePath('/api/v1')
  .get('/api/v1', (c) => c.json({ message: 'Hello, World!' }))
  .route('/invoices', invoicesRoute)

export default app
export type ApiRoutes = typeof apiRoutes
