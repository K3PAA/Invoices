import { InvoiceStatus, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const user = {
  email: 'test@gamil.com',
  password: 'password',
  name: 'test user',
  invoices: [
    {
      id: 'RT3080',
      createdAt: '2021-08-18T12:00:00.000Z',
      paymentDue: '2021-08-19T12:00:00.000Z',
      description: 'Re-branding',
      paymentTerms: 1,
      clientName: 'Jensen Huang',
      clientEmail: 'jensenh@mail.com',
      status: 'paid' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '106 Kendell Street',
          city: 'Sharrington',
          postCode: 'NR24 5WQ',
          country: 'United Kingdom',
        },
      },
      items: {
        create: [
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 1800.9,
            total: 1800.9,
          },
        ],
      },
      total: 1800.9,
    },
    {
      id: 'XM9141',
      createdAt: '2021-08-21T12:00:00.000Z',
      paymentDue: '2021-09-20T12:00:00.000Z',
      description: 'Graphic Design',
      paymentTerms: 30,
      clientName: 'Alex Grim',
      clientEmail: 'alexgrim@mail.com',
      status: 'pending' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '84 Church Way',
          city: 'Bradford',
          postCode: 'BD1 9PB',
          country: 'United Kingdom',
        },
      },
      items: {
        create: [
          {
            name: 'Banner Design',
            quantity: 1,
            price: 156,
            total: 156,
          },
          {
            name: 'Email Design',
            quantity: 2,
            price: 200,
            total: 400,
          },
        ],
      },
      total: 556,
    },
    {
      id: 'RG0314',
      createdAt: '2021-09-24T12:00:00.000Z',
      paymentDue: '2021-10-01T12:00:00.000Z',
      description: 'Website Redesign',
      paymentTerms: 7,
      clientName: 'John Morrison',
      clientEmail: 'jm@myco.com',
      status: 'paid' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '79 Dover Road',
          city: 'Westhall',
          postCode: 'IP19 3PF',
          country: 'United Kingdom',
        },
      },
      items: {
        create: [
          {
            name: 'Website Redesign',
            quantity: 1,
            price: 14002.33,
            total: 14002.33,
          },
        ],
      },
      total: 14002.33,
    },
    {
      id: 'RT2080',

      createdAt: '2021-10-11T12:00:00.000Z',
      paymentDue: '2021-10-12T12:00:00.000Z',
      description: 'Logo Concept',
      paymentTerms: 1,
      clientName: 'Alysa Werner',
      clientEmail: 'alysa@email.co.uk',
      status: 'pending' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '63 Warwick Road',
          city: 'Carlisle',
          postCode: 'CA20 2TG',
          country: 'United Kingdom',
        },
      },
      items: {
        create: [
          {
            name: 'Logo Sketches',
            quantity: 1,
            price: 102.04,
            total: 102.04,
          },
        ],
      },
      total: 102.04,
    },
    {
      id: 'AA1449',

      createdAt: '2021-10-01T12:00:00.000Z',
      paymentDue: '2021-10-31T12:00:00.000Z',
      description: 'Re-branding',
      paymentTerms: 7,
      clientName: 'Mellisa Clarke',
      clientEmail: 'mellisa.clarke@example.com',
      status: 'pending' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '46 Abbey Row',
          city: 'Cambridge',
          postCode: 'CB5 6EG',
          country: 'United Kingdom',
        },
      },
      items: {
        create: [
          {
            name: 'New Logo',
            quantity: 1,
            price: 1532.33,
            total: 1532.33,
          },
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 2500,
            total: 2500,
          },
        ],
      },
      total: 4032.33,
    },
    {
      id: 'TY9141',
      createdAt: '2021-10-21T12:00:00.000Z',
      paymentDue: '2021-10-31T12:00:00.000Z',
      description: 'Landing Page Design',
      paymentTerms: 30,
      clientName: 'Thomas Wayne',
      clientEmail: 'thomas@dc.com',
      status: 'pending' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '3964  Queens Lane',
          city: 'Gotham',
          postCode: '60457',
          country: 'United States of America',
        },
      },
      items: {
        create: [
          {
            name: 'Web Design',
            quantity: 1,
            price: 6155.91,
            total: 6155.91,
          },
        ],
      },
      total: 6155.91,
    },
    {
      id: 'FV2353',
      createdAt: '2021-11-01T12:00:00.000Z',
      paymentDue: '2021-11-11T12:00:00.000Z',
      description: 'Logo Re-design',
      paymentTerms: 7,
      clientName: 'Anita Wainwright',
      clientEmail: '',
      status: 'draft' as InvoiceStatus,
      senderAddress: {
        create: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
      },
      clientAddress: {
        create: {
          street: '',
          city: '',
          postCode: '',
          country: '',
        },
      },
      items: {
        create: [
          {
            name: 'Logo Re-design',
            quantity: 1,
            price: 3102.04,
            total: 3102.04,
          },
        ],
      },
      total: 3102.04,
    },
  ],
}

try {
  console.log('DELETING...')
  await prisma.user.deleteMany()

  console.log('CREATING USER...')
  const testUser = await prisma.user.create({
    data: {
      email: user.email,
      password: user.password,
      name: user.name,
      invoices: {
        create: user.invoices,
      },
    },
  })
  console.log('USER CREATED', testUser)
  const count = await prisma.user.count()
  console.log(`There are ${count} users in the database.`)
} catch (error) {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
} finally {
  await prisma.$disconnect()
}
