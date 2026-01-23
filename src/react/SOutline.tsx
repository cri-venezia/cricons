import * as React from 'react'
import type { SVGProps } from 'react'
const SOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 18a9 9 0 0 1 9-9h4a9 9 0 0 1 8.487 6 3 3 0 1 1-5.657 2A3 3 0 0 0 26 15h-4a3 3 0 1 0 0 6h4a9 9 0 1 1 0 18h-4a9 9 0 0 1-8.487-6 3 3 0 1 1 5.657-2A3 3 0 0 0 22 33h4a3 3 0 1 0 0-6h-4a9 9 0 0 1-9-9m9-7a7 7 0 1 0 0 14h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-4.716-3.333 1 1 0 1 0-1.885.666A7 7 0 0 0 22 37h4a7 7 0 1 0 0-14h-4a5 5 0 0 1 0-10h4a5 5 0 0 1 4.716 3.333 1 1 0 1 0 1.885-.666A7 7 0 0 0 26 11z"
      clipRule="evenodd"
    />
  </svg>
)
export default SOutline
