import * as React from 'react'
import type { SVGProps } from 'react'
const AlertCircleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m0 2C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M26 13a2 2 0 1 0-4 0v14a2 2 0 1 0 4 0zM24 33a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
    />
  </svg>
)
export default AlertCircleOutline
