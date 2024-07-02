import { Button } from '@/components/ui/button'
import { AiFillPlusCircle } from 'react-icons/ai'

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
        <h1 className='text-2xl sm:text-3xl font-bold text-foreground'>
          Invoices
        </h1>
        <p className='text-gray-200 text-sm tracking-wider'>
          <span className='hidden sm:block'>There are 4 pending invoices</span>
          <span className='sm:hidden'>4 invoices</span>
        </p>
      </section>

      <section className='flex gap-x-4'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='font-bold'>
                Filter <span className='hidden sm:block ml-1'>by status</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid  min-w-[100px] sm:min-w-[200px] gap-y-4 p-3'>
                  {filterOptions.map((option) => (
                    <li className='flex items-center space-x-2 ' key={option}>
                      <Checkbox id={option} />
                      <Label htmlFor={option} className='w-full p-4 font-bold'>
                        {capitalize(option)}
                      </Label>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className='font-bold rounded-full py-6 '>
          <AiFillPlusCircle className='mr-4 text-3xl  rounded-full' />
          New <span className='hidden sm:block ml-1'> Invoice</span>
        </Button>
      </section>
    </header>
  )
}
