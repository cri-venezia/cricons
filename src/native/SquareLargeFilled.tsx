import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SquareLargeFilled = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M6 7C6 6.44772 6.44772 6 7 6H41C41.5523 6 42 6.44772 42 7V41C42 41.5523 41.5523 42 41 42H7C6.44772 42 6 41.5523 6 41V7Z"
      fill="currentColor"
    />
  </Svg>
)
export default SquareLargeFilled
