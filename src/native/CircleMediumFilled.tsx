import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const CircleMediumFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      d="M23.9999 40C32.8366 40 40 32.8365 40 24C40 15.1633 32.8366 8 23.9999 8C15.1634 8 8 15.1633 8 24C8 32.8365 15.1634 40 23.9999 40Z"
      fill="currentColor"
    />
  </Svg>
)
export default CircleMediumFilled
