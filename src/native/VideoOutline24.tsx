import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const VideoOutline24 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7C2 5.89543 2.89543 5 4 5H16C17.1046 5 18 5.89543 18 7V9.71439L22 7.00012V17.0001L18 14.4287V17C18 18.1046 17.1046 19 16 19H4C2.89543 19 2 18.1046 2 17V7ZM4 7H16V17H4V7Z"
      fill="currentColor"
    />
  </Svg>
)
export default VideoOutline24
