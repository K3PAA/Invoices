import { cn } from '@/lib/utils'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('max-w-[800px] mx-auto px-6', className)}>
      {children}
    </div>
  )
}
