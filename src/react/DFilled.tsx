import * as React from 'react'
import type { SVGProps } from 'react'
const DFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12a2 2 0 0 1 2-2h8c7.732 0 14 6.268 14 14s-6.268 14-14 14h-8a2 2 0 0 1-2-2zm4 2v20h6c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
)
export default DFilled
