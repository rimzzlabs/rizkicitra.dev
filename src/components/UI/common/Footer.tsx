import { CustomImage } from '@/UI/images'
import { UnstyledLink } from '@/UI/links'

import APP_ROUTE, { ADDT_ROUTE } from '@/libs/constants/route'
import SOCIAL from '@/libs/constants/social'
import { twclsx } from '@/libs/twclsx'

import { useRouter } from 'next/router'

export const Footer: React.FunctionComponent = () => {
  const { pathname } = useRouter()
  const isError = pathname === '/_error' || pathname === '/_offline' || pathname === '/404'
  const className = twclsx('text-sm md:text-base md:max-w-max', 'text-theme-500 hover:text-primary-500', 'transition')

  if (isError) {
    return null
  }

  return (
    <footer className={twclsx('py-6 md:py-10', 'mt-10 md:mt-20', 'border-t', 'border-theme-300 dark:border-theme-700')}>
      <div className={twclsx('inline-flex items-center', 'select-none mb-8')}>
        <CustomImage
          src='/icon-256x256.png'
          alt='icon'
          display='intrinsic'
          className='rounded-lg animate-pulse'
          loading='lazy'
          width={30}
          height={30}
        />
        <span
          className={twclsx(
            'font-semibold ml-2.5',
            'text-xl md:text-2xl text-transparent dark:text-transparent',
            'bg-gradient-to-r bg-clip-text',
            'from-primary-700 to-ternary-700 dark:from-primary-500 dark:to-ternary-500'
          )}
        >
          rizkicitra.dev
        </span>
      </div>

      <section className={twclsx('flex')}>
        <div className={twclsx('flex flex-col', 'w-full', 'space-y-4')}>
          {APP_ROUTE.map((route) => (
            <UnstyledLink title={route.name} className={twclsx(className)} href={route.path} key={route.path}>
              {route.name}
            </UnstyledLink>
          ))}
        </div>

        <div className={twclsx('flex flex-col', 'w-full', 'space-y-4')}>
          {SOCIAL.map((route) => (
            <UnstyledLink
              title={route.title}
              className={twclsx(className, `umami--click--${route.title.toLowerCase()}-button`)}
              href={route.href}
              key={route.href}
            >
              {route.title}
            </UnstyledLink>
          ))}
        </div>

        <div className={twclsx('flex flex-col', 'w-full', 'space-y-4')}>
          {ADDT_ROUTE.map((route) => (
            <UnstyledLink title={route.name} className={twclsx(className)} href={route.path} key={route.path}>
              {route.name}
            </UnstyledLink>
          ))}
        </div>
      </section>
    </footer>
  )
}
