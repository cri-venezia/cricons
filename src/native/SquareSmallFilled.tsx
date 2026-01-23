import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SquareSmallFilled = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M12 13C12 12.4477 12.4477 12 13 12H35C35.5523 12 36 12.4477 36 13V35C36 35.5523 35.5523 36 35 36H13C12.4477 36 12 35.5523 12 35V13Z"
      fill="currentColor"
    />
  </Svg>
)
export default SquareSmallFilled
