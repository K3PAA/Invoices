import { Hono } from 'hono'

import prisma from '../db/db'

const usersRoute = new Hono()
  .get('/', async (c) => {
    const users = await prisma.user.findMany()
    return c.json({ users, count: users.length })
  })
  .get('/:id', async (c) => {
    const user = await prisma.user.findUnique({
      where: {
        id: c.req.param('id'),
      },
    })
    if (!user) {
      c.status(404)
      return c.json({ error: 'User not found!' })
    }
    return c.json({ user })
  })

export default usersRoute
