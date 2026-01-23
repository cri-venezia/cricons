import * as React from 'react'
import type { SVGProps } from 'react'
const NeutralFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16m0 2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20 21c0 2.21-1.12 4-2.5 4S15 23.21 15 21s1.12-4 2.5-4 2.5 1.79 2.5 4M33 21c0 2.21-1.12 4-2.5 4S28 23.21 28 21s1.12-4 2.5-4 2.5 1.79 2.5 4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 31a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
)
export default NeutralFilled
