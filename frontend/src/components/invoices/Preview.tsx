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
    <li className='shadow-sm block border-2 border-secondary hover:border-primary rounded-md'>
      <Button variant='secondary' asChild>
        <a
          href=''
          className='w-full flex flex-col h-full sm:flex-row justify-between sm:items-center py-8 px-4  md:px-6 '
        >
          <div className='flex sm:gap-3 md:gap-8  w-full sm:flex-1 justify-between sm:justify-start'>
            <p className='text-foreground font-bold '>
              <span className='text-primary '>#</span>
              {invoice.id}
            </p>
            <p className='hidden sm:block text-gray-200'>{paymentDue}</p>
            <p className='text-foreground'>{invoice.clientName}</p>
          </div>

          <div className='flex  items-center w-full sm:max-w-[340px] justify-between sm:justify-end mt-6 sm:mt-0'>
            <p className='text-foreground text-lg sm:text-base sm:mr-4 md:mr-10 flex flex-col font-bold'>
              <span className='sm:hidden text-xs text-gray-200'>
                {paymentDue}
              </span>
              &pound; {invoice.total}
            </p>

            <p
              className={cn(
                'sm:flex-1 w-[120px] sm:max-w-[110px] md:max-w-[140px] font-bold py-3 rounded-md flex items-center justify-center gap-x-2',
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
            <div className='hidden sm:block ml-5 text-primary'>
              <FaChevronRight size={16} />
            </div>
          </div>
        </a>
      </Button>
    </li>
  )
}
