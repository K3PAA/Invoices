import Container from '../Container'
import Header from './Header'
import Preview from './Preview'

import { useEffect, useState } from 'react'
import { Invoice } from '@prisma/client'

export default function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([])

  useEffect(() => {
    const getInvoices = async () => {
      const res = await fetch('/api/v1/invoices')
      const data = await res.json()
      setInvoices(data.invoices)
    }
    getInvoices()
  }, [])

  return (
    <main className='my-12'>
      <Container>
        <Header />
        <ul className='flex flex-col gap-4 mt-16'>
          {invoices?.map((invoice) => (
            <Preview key={invoice.id} invoice={invoice} />
          ))}
        </ul>
      </Container>
    </main>
  )
}
