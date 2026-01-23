import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const EntryFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 5.38748C21 4.70493 21.6687 4.22296 22.3162 4.4388L35.3162 8.77214C35.7246 8.90825 36 9.29039 36 9.72082V38.2793C36 38.7097 35.7246 39.0919 35.3162 39.228L22.3162 43.5613C21.6687 43.7772 21 43.2952 21 42.6126V39.0001H12V8.00006H21V5.38748ZM27 23.0001C27 24.1046 26.5523 25.0001 26 25.0001C25.4477 25.0001 25 24.1046 25 23.0001C25 21.8955 25.4477 21.0001 26 21.0001C26.5523 21.0001 27 21.8955 27 23.0001ZM21 10.0001H14V37.0001H21V10.0001Z"
      fill="currentColor"
    />
  </Svg>
)
export default EntryFilled
