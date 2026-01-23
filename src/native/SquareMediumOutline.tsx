import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SquareMediumOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11V37H37V11H11ZM10 9C9.44772 9 9 9.44772 9 10V38C9 38.5523 9.44772 39 10 39H38C38.5523 39 39 38.5523 39 38V10C39 9.44772 38.5523 9 38 9H10Z"
      fill="currentColor"
    />
  </Svg>
)
export default SquareMediumOutline
