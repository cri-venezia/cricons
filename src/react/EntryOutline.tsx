import * as React from 'react'
import type { SVGProps } from 'react'
const EntryOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 6.775v34.45l11-3.666V10.442zm-.684-2.336A1 1 0 0 0 21 5.387v37.226a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M27 23c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2" />
    <path fill="currentColor" fillRule="evenodd" d="M21 8h-9v31h9v-2h-7V10h7z" clipRule="evenodd" />
  </svg>
)
export default EntryOutline
