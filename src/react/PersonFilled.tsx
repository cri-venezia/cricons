import * as React from 'react'
import type { SVGProps } from 'react'
const PersonFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="currentColor" d="M6 36c0-4.965 11.993-8 18-8 6.008 0 18 3.035 18 8v6H6z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10"
      clipRule="evenodd"
    />
  </svg>
)
export default PersonFilled
