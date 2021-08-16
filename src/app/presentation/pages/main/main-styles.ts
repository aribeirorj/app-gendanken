import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.lineHeight.xxlarge};
    font-weight: ${theme.font.normal};
  `}
`
