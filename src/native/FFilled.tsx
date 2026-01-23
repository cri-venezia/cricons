import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const FFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12C16 10.8954 16.8954 10 18 10L30 10C31.1046 10 32 10.8954 32 12C32 13.1046 31.1046 14 30 14L20 14L20 22L30 22C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26L20 26L20 36C20 37.1046 19.1046 38 18 38C16.8954 38 16 37.1046 16 36L16 12Z"
      fill="currentColor"
    />
  </Svg>
)
export default FFilled
