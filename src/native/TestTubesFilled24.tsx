import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const TestTubesFilled24 = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" width={24} height={24} {...props}>
    <Path d="M8 5H16V2H8V5Z" fill="currentColor" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 6H9V18.8235C9 20.5778 10.3431 22 12 22C13.6569 22 15 20.5778 15 18.8235V6ZM13 14V8H11V14H13Z"
      fill="currentColor"
    />
  </Svg>
)
export default TestTubesFilled24
