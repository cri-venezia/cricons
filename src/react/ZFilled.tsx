import * as React from 'react'
import type { SVGProps } from 'react'
const ZFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M29.73 14H14a2 2 0 0 1 0-4h20a2 2 0 0 1 1.536 3.28L18.27 34H34a2 2 0 1 1 0 4H14a2 2 0 0 1-1.536-3.28z"
      clipRule="evenodd"
    />
  </svg>
)
export default ZFilled
