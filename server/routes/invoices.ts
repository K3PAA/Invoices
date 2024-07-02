import { Hono } from 'hono'

import prisma from '../db/db'

const invoicesRoute = new Hono()
  .get('/', async (c) => {
    const invoices = await prisma.invoice.findMany()
    return c.json({ invoices, count: invoices.length })
  })
  .post('/', async (c) => {
    return c.json({ invoices: 'Create invoice!' })
  })
  .get('/:id', async (c) => {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id: c.req.param('id'),
      },
    })
    if (!invoice) {
      c.status(404)
      return c.json({ error: 'Invoice not found!' })
    }
    return c.json({ invoice })
  })
  .put('/:id', async (c) => {
    return c.json({ invoices: `Update invoice ${c.req.param('id')}!` })
  })
  .delete('/:id', async (c) => {
    return c.json({ invoices: `Delete invoice ${c.req.param('id')}!` })
  })

export default invoicesRoute
