import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SquareLargeOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8V40H40V8H8ZM7 6C6.44772 6 6 6.44772 6 7V41C6 41.5523 6.44772 42 7 42H41C41.5523 42 42 41.5523 42 41V7C42 6.44772 41.5523 6 41 6H7Z"
      fill="currentColor"
    />
  </Svg>
)
export default SquareLargeOutline
