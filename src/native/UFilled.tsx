import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const UFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 10C17.1046 10 18 10.8954 18 12V28C18 31.3137 20.6863 34 24 34C27.3137 34 30 31.3137 30 28V12C30 10.8954 30.8954 10 32 10C33.1046 10 34 10.8954 34 12V28C34 33.5228 29.5228 38 24 38C18.4772 38 14 33.5228 14 28V12C14 10.8954 14.8954 10 16 10Z"
      fill="currentColor"
    />
  </Svg>
)
export default UFilled
