import * as React from 'react'
import type { SVGProps } from 'react'
const GymOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 32V16h-3v16zM14 29V19h-3v4h-1v2h1v4zM29 16v16h3V16zM34 29h3v-4h1v-2h-1v-4h-3zM21 25h6v-2h-6z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
)
export default GymOutline
