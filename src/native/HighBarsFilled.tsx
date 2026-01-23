import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const HighBarsFilled = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="none" width={24} height={24} {...props}>
    <Path
      d="M32 9C32 7.34315 33.3431 6 35 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H35C33.3431 42 32 40.6569 32 39V9Z"
      fill="currentColor"
    />
    <Path
      d="M19 21C19 19.3431 20.3431 18 22 18H26C27.6569 18 29 19.3431 29 21V39C29 40.6569 27.6569 42 26 42H22C20.3431 42 19 40.6569 19 39V21Z"
      fill="currentColor"
    />
    <Path
      d="M9 30C7.34315 30 6 31.3431 6 33V39C6 40.6569 7.34315 42 9 42H13C14.6569 42 16 40.6569 16 39V33C16 31.3431 14.6569 30 13 30H9Z"
      fill="currentColor"
    />
  </Svg>
)
export default HighBarsFilled
