import { Hono } from 'hono'

import prisma from '../db/db'

const itemsRoute = new Hono()
  .get('/', async (c) => {
    const items = await prisma.item.findMany()
    return c.json({ items, count: items.length })
  })
  .get('/:id', async (c) => {
    const item = await prisma.item.findUnique({
      where: {
        id: c.req.param('id'),
      },
    })

    if (!item) {
      c.status(404)
      return c.json({ error: 'Item not found!' })
    }

    return c.json({ item })
  })

export default itemsRoute
