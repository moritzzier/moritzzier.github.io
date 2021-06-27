import * as React from 'react'
import IconLink from '../IconLink/IconLink'

export const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  const { menuItems } = props

  // NavBar.createItem transforms the values from the INavbarItem interface
  // into a ReactNode
  const createItem = (item: INavbarItem, key: number) => {
    return (
      <li className="p-2" key={key}>
        <IconLink href={item.href} title={item.name}>
          {item.icon}
        </IconLink>
      </li>
    )
  }

  return (
    <nav className="lg:fixed lg:bottom-0 lg:right-auto bg-paper absolute top-0 right-0 left-0">
      <ul className="lg:flex-col flex justify-center">
        {menuItems?.map((x, i) => createItem(x, i))}
      </ul>
    </nav>
  )
}

// INavbarItem interface describes a menu item in the navbar.
// The icon attribute should be a 24x24 svg-icon
// The name attribute is displayed as a tooltip
// The href attribute is where the link is pointing
interface INavbarItem {
  icon: React.ReactNode
  name: string
  href: string
}
export interface INavBarProps {
  menuItems?: INavbarItem[]
}

export default NavBar
