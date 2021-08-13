import * as Styled from './hero-styles'
import { Button } from '../../../../components'

const Hero = () => (
  <Styled.Wrapper>
    <Styled.Title>
      Welcome to <b>iClinic</b>
    </Styled.Title>
    <Styled.SubTitle>FRONTEND CHALLENGE</Styled.SubTitle>
    <Button color={'blue'}>START</Button>
  </Styled.Wrapper>
)

export default Hero
