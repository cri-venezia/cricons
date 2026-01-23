import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const CreditCardFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 10C5.34315 10 4 11.3431 4 13V17H44V13C44 11.3431 42.6569 10 41 10H7ZM44 23H4V35C4 36.6569 5.34315 38 7 38H41C42.6569 38 44 36.6569 44 35V23Z"
      fill="currentColor"
    />
  </Svg>
)
export default CreditCardFilled
