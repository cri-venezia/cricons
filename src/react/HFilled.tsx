import * as React from 'react'
import type { SVGProps } from 'react'
const HFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 10a2 2 0 0 1 2 2v10h12V12a2 2 0 1 1 4 0v24a2 2 0 1 1-4 0V26H18v10a2 2 0 1 1-4 0V12a2 2 0 0 1 2-2"
      clipRule="evenodd"
    />
  </svg>
)
export default HFilled
