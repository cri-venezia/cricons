import * as React from 'react'
import type { SVGProps } from 'react'
const AwardRibbonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13 20c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M31 34.391C36.328 31.794 40 26.326 40 20c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 6.327 3.672 11.796 9.001 14.392V43a1 1 0 0 0 1.555.832L24 40.202l5.445 3.63A1 1 0 0 0 31 43zM24 34c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14"
      clipRule="evenodd"
    />
  </svg>
)
export default AwardRibbonFilled
