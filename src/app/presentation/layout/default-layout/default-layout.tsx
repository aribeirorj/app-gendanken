import React from 'react'
import * as Styled from './default-layout-styles'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Main>{children}</Styled.Main>
    </Styled.Wrapper>
  )
}

export default DefaultLayout
