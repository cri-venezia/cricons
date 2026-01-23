import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const MouthFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 24C7 18.5453 15.2 10.2545 24 14.1818C33 9.81822 41 18.5454 44 24C41 28.3636 32.8 36 24 36C15.2 36 7 28.3636 4 24ZM9.30929 23.5229C12.4149 22.4731 18.1843 21 24 21C29.7472 21 35.4492 22.4386 38.5799 23.4856C39.0367 23.6384 39.0113 24.2838 38.55 24.4225L38.5245 24.4302C35.5004 25.3398 29.9805 27 24 27C17.9208 27 12.3174 25.3748 9.32775 24.4265C8.88033 24.2845 8.86462 23.6732 9.30929 23.5229Z"
      fill="currentColor"
    />
  </Svg>
)
export default MouthFilled
