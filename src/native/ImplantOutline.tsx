import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const ImplantOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10C20 7.79086 21.7909 6 24 6C26.2091 6 28 7.79086 28 10V38C28 40.2091 26.2091 42 24 42C21.7909 42 20 40.2091 20 38V10ZM24 8C22.8954 8 22 8.89543 22 10V38C22 39.1046 22.8954 40 24 40C25.1046 40 26 39.1046 26 38V10C26 8.89543 25.1046 8 24 8Z"
      fill="currentColor"
    />
  </Svg>
)
export default ImplantOutline
