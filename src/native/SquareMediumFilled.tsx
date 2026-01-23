import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SquareMediumFilled = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M9 10C9 9.44772 9.44772 9 10 9H38C38.5523 9 39 9.44772 39 10V38C39 38.5523 38.5523 39 38 39H10C9.44772 39 9 38.5523 9 38V10Z"
      fill="currentColor"
    />
  </Svg>
)
export default SquareMediumFilled
