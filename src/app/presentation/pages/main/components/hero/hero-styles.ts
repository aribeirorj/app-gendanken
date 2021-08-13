import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.lineHeight.xxlarge};
    font-weight: ${theme.font.normal};
  `}
`
export const SubTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.lineHeight.xsmall};
    font-weight: ${theme.font.normal};
    letter-spacing: ${theme.spacings.xxsmall};
  `}
`
