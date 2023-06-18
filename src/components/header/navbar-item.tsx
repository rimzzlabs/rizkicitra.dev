import { ROUTE } from '@/data/routes'
import { tw } from '@/utils/tw'

import { UnstyledLink } from '../link/unstyled'

export const NavbarItem = (props: ROUTE) => {
  return (
    <UnstyledLink
      href={props.href}
      title={props.title}
      className={tw('mr-2.5 last-of-type:mr-unset')}
    >
      {props.name}
    </UnstyledLink>
  )
}