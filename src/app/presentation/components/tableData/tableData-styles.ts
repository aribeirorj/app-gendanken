import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 55vw;
  height: 80%;
`
export const DialogResume = styled.div`
  padding: 4rem;
`

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.lineHeight.xlarge};
    font-weight: ${theme.font.normal};
  `}
`

export const Detail = styled.div``
