import * as React from 'react'
import type { SVGProps } from 'react'
const JOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 12a3 3 0 1 1 6 0v18a9 9 0 1 1-18 0 3 3 0 0 1 6 0 3 3 0 1 0 6 0zm3-1a1 1 0 0 0-1 1v18a5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 1 0 14 0V12a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
)
export default JOutline
