import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const CircleSmallFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3725 30.6274 12 24 12C17.3726 12 12 17.3725 12 24C12 30.6274 17.3726 36 24 36Z"
      fill="currentColor"
    />
  </Svg>
)
export default CircleSmallFilled
