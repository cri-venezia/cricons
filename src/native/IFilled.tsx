import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const IFilled = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 12C14 10.8954 14.8954 10 16 10L32 10C33.1046 10 34 10.8954 34 12C34 13.1046 33.1046 14 32 14H26L26 34H32C33.1046 34 34 34.8954 34 36C34 37.1046 33.1046 38 32 38H16C14.8954 38 14 37.1046 14 36C14 34.8954 14.8954 34 16 34H22L22 14L16 14C14.8954 14 14 13.1046 14 12Z"
      fill="currentColor"
    />
  </Svg>
)
export default IFilled
