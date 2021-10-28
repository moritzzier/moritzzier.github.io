import * as React from 'react'

export const ArrowUp: React.FC<IArrowUpProps> = (props: IArrowUpProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="50">
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <path d="M10 7.875c-1.975 13.446 1.001 27.03-.5 40.5M3.236 11.107c3.721-2.325 4.349-6.603 7.402-9.481 1.046 3.027 3.442 9.07 6.125 11.113" />
      </g>
    </svg>
  )
}

export interface IArrowUpProps {}
