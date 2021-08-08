import * as React from 'react'

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { variant, children } = props

  switch (variant) {
    case 'h1':
      return (
        <h1 className="lg:text-7xl pb-4 text-5xl text-typo-dark font-display">
          {children}
        </h1>
      )
    default:
      return (
        <h2 className="lg:text-5xl pb-4 text-4xl text-typo-dark font-display">
          {children}
        </h2>
      )
  }
}

export interface IHeaderProps {
  variant?: 'h1' | 'h2'
  children?: React.ReactNode
}

export default Header
