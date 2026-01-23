import * as React from 'react'
import type { SVGProps } from 'react'
const TFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 12a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4h-6v22a2 2 0 1 1-4 0V14h-6a2 2 0 0 1-2-2"
      clipRule="evenodd"
    />
  </svg>
)
export default TFilled
