import * as React from 'react'
import { Footer } from '../../elements/Footer/Footer'
import NavBar from '../../elements/NavBar/NavBar'

export const DefaultLayout: React.FC<IDefaultLayoutProps> = (
  props: IDefaultLayoutProps
) => {
  const { children } = props
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export interface IDefaultLayoutProps {
  children?: React.ReactNode
}
