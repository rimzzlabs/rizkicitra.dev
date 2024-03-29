'use client'

import { tw } from '@/utils/common'

export type ErrorPageProps = {
  error: Error
  reset: () => void
}
export default function GlobalErrorPage(props: ErrorPageProps) {
  return (
    <div className='w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center'>
      <h2>Something went wrong!</h2>
      <p className='mt-3 mb-2 text-center max-w-prose mx-auto'>{props.error.message}</p>
      <button
        className={tw(
          'py-2 px-4 text-sm',
          'rounded-md transition',
          'bg-primary-500 text-white',
          'hover:bg-primary-700',
        )}
        onClick={props.reset}
      >
        Try again
      </button>
    </div>
  )
}
