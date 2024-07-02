import { Invoice } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { capitalize, cn } from '@/lib/utils'

import { GoDotFill } from 'react-icons/go'
import { FaChevronRight } from 'react-icons/fa'

type PreviewProps = {
  invoice: Invoice
}

export default function Preview({ invoice }: PreviewProps) {
  const paymentDue = new Date(invoice.paymentDue).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <li className='shadow-sm'>
      <Button variant='secondary' asChild>
        <a
          href=''
          className='w-full flex justify-between items-center py-8 px-6 '
        >
          <div className='flex gap-8 flex-1 justify-start'>
            <p className='text-white font-bold '>
              <span className='text-primary '>#</span>
              {invoice.id}
            </p>
            <p className='text-gray-200'>{paymentDue}</p>
            <p className='text-white'>{invoice.clientName}</p>
          </div>

          <div className='flex items-center w-full max-w-[340px] justify-end'>
            <p className='text-white mr-10'> &pound; {invoice.total}</p>

            <p
              className={cn(
                'flex-1  max-w-[140px] font-bold py-3 rounded-md flex items-center justify-center gap-x-2',
                {
                  'bg-success/10 text-success': invoice.status === 'paid',
                  'bg-pending/10 text-pending': invoice.status === 'pending',
                  'bg-gray-200/10 text-gray-200': invoice.status === 'draft',
                }
              )}
            >
              <GoDotFill />
              {capitalize(invoice.status)}
            </p>
            <div className='ml-5 text-primary'>
              <FaChevronRight size={16} />
            </div>
          </div>
        </a>
      </Button>
    </li>
  )
}
