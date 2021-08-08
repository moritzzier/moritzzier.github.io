import * as React from 'react'

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
  const { children, id } = props
  return (
    <section id={id} className="h-screen flex flex-col justify-center ">
      {children}
    </section>
  )
}

export interface ISectionProps {
  id?: string
  children?: React.ReactNode | React.ReactNode[]
}

export default Section
