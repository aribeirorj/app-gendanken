import React from 'react'
import * as Styled from './button-styles'

export type ButtonProps = {
  color: 'blue' | 'white' | 'black'
  children?: React.ReactNode
}

const Button = ({ color, children }: ButtonProps) => {
  return <Styled.Button color={color}>{children}</Styled.Button>
}

export default Button
