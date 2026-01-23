import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const ExerciseFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 14H36V34H32V25H16V34H12V14H16V23H32V14ZM6 23V17H10V31H6V25H4V23H6ZM44 25H42V31H38V17H42V23H44V25Z"
      fill="currentColor"
    />
  </Svg>
)
export default ExerciseFilled
