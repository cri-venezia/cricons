import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const HeartFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      d="M6 18.7241C6 12.6409 10.0359 7 15.5625 7C19.3976 7 22.2434 9.53088 24 13.1211C25.7565 9.53111 28.6022 7 32.4375 7C37.9647 7 42 12.6419 42 18.7241C42 31.7444 24 41 24 41C24 41 6 32.3045 6 18.7241Z"
      fill="currentColor"
    />
  </Svg>
)
export default HeartFilled
