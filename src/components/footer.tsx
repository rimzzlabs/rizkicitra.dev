'use client'

import { ALL_ROUTE } from '@/data/routes'
import { tw } from '@/utils/tw'

import { UnstyledLink } from './link/unstyled'

import { useSelectedLayoutSegment } from 'next/navigation'
import { match } from 'ts-pattern'

export const Footer = () => {
  const segment = useSelectedLayoutSegment()

  return match(segment)
    .with('__DEFAULT__', () => null)
    .with('not-found', () => null)
    .otherwise(() => (
      <footer
        className={tw(
          'layout',
          'pt-3 pb-6 mt-4',
          'border-t-2 border-t-base-300 dark:border-t-base-800',
        )}
      >
        <p className='font-semibold mb-2'>Explore More</p>

        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3'>
          {ALL_ROUTE.map(({ name, ...item }) => {
            return (
              <UnstyledLink
                {...item}
                className='md:max-w-max text-sm transition hover:text-primary-600'
                key={item.href}
              >
                {name}
              </UnstyledLink>
            )
          })}
        </div>

        <p className='mt-4 text-sm'>&copy; rizkicitra.dev 2022 - {new Date().getFullYear()}</p>
      </footer>
    ))
}
