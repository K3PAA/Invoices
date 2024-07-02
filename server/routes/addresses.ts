import { Hono } from 'hono'

import prisma from '../db/db'

const addressesRoute = new Hono()
  .get('/', async (c) => {
    const addresses = await prisma.address.findMany()

    return c.json({ addresses, count: addresses.length })
  })
  .get('/:id', async (c) => {
    const address = await prisma.address.findUnique({
      where: {
        id: c.req.param('id'),
      },
    })
    if (!address) {
      c.status(404)
      return c.json({ error: 'Adress not found' })
    }

    return c.json({ address })
  })

export default addressesRoute
