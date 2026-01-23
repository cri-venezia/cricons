import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const VideoFilled = (props: SvgProps) => (
  <Svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M4 13C4 11.3431 5.34315 10 7 10H33C34.6569 10 36 11.3431 36 13V19.4286L44 14V34L36 28.8571V35C36 36.6569 34.6569 38 33 38H7C5.34315 38 4 36.6569 4 35V13Z"
      fill="currentColor"
    />
  </Svg>
)
export default VideoFilled
