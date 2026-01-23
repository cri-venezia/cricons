import * as React from 'react'
import type { SVGProps } from 'react'
const ExerciseFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 14h4v20h-4v-9H16v9h-4V14h4v9h16zM6 23v-6h4v14H6v-6H4v-2zm38 2h-2v6h-4V17h4v6h2z"
      clipRule="evenodd"
    />
  </svg>
)
export default ExerciseFilled
