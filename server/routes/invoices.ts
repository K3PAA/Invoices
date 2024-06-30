import { Hono } from 'hono'

export const invoicesRoute = new Hono()
  .get('/', (c) => {
    return c.json({ invoices: 'Get invoices!' })
  })
  .post('/', (c) => {
    return c.json({ invoices: 'Create invoice!' })
  })
  .get('/:id', (c) => {
    return c.json({ invoices: `Get invoice ${c.req.param('id')}!` })
  })
  .put('/:id', (c) => {
    return c.json({ invoices: `Update invoice ${c.req.param('id')}!` })
  })
  .delete('/:id', (c) => {
    return c.json({ invoices: `Delete invoice ${c.req.param('id')}!` })
  })
