import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { capitalize } from '@/lib/utils'

const filterOptions = ['pending', 'paid', 'draft']

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <section>
        <h1 className='text-5xl font-bold'>Invoices</h1>
        <p className='text-slate-200 text-sm tracking-wider'>
          There are 4 pending invoices
        </p>
      </section>

      <section className='flex gap-x-4'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Filter by status</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid min-w-[200px] gap-y-4 p-6'>
                  {filterOptions.map((option) => (
                    <li className='flex items-center space-x-2 ' key={option}>
                      <Checkbox id={option} />
                      <Label htmlFor={option} className='w-full'>
                        {capitalize(option)}
                      </Label>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button>
          <PlusIcon size={16} />
          New Invoice
        </Button>
      </section>
    </header>
  )
}
