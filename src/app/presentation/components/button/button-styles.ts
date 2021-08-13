import styled, { css } from 'styled-components'

import { ButtonProps } from './button'

type ButtonPropsReduced = Pick<ButtonProps, 'color'>

export const Button = styled.button<ButtonPropsReduced>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
    height: 
  `}
`
