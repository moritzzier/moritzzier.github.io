import * as React from 'react'
import { Footer, IFooterProps } from '../../elements/Footer/Footer'
import NavBar, { INavBarProps } from '../../elements/NavBar/NavBar'

export const DefaultLayout: React.FC<IDefaultLayoutProps> = (
  props: IDefaultLayoutProps
) => {
  const { children, mainProps, navProps, footerProps } = props
  return (
    <>
      <NavBar {...navProps}/>
      <main {...mainProps}>{children}</main>
      <Footer {...footerProps}/>
    </>
  )
}

export interface IDefaultLayoutProps {
  children?: React.ReactNode,
  mainProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  navProps?: INavBarProps;
  footerProps?: IFooterProps;
}

export default DefaultLayout;
