import { tw } from '@/utils/common'

type P = {
  className?: string
}

export const MainLayout = (props: React.PropsWithChildren<P>) => {
  return (
    <main className={tw('layout', props.className)} id='skip-content'>
      {props.children}
    </main>
  )
}
