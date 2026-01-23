import * as React from 'react'
import type { SVGProps } from 'react'
const EFilled = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H20v8h10a2 2 0 1 1 0 4H20v8h10a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2z"
      clipRule="evenodd"
    />
  </svg>
)
export default EFilled
