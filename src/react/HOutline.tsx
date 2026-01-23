import * as React from 'react'
import type { SVGProps } from 'react'
const HOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 12a3 3 0 1 1 6 0v9h10v-9a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0v-9H19v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V25h14v11a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0v11H17V12a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
)
export default HOutline
