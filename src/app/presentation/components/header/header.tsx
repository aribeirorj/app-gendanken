import * as Styled from './header-styles'

type Props = {
  label?: string
  icon?: string
}

const DefaultLayout = ({ label, icon }: Props) => (
  <Styled.Wrapper>
    <Styled.IconReturn>{icon}</Styled.IconReturn>;
    <Styled.LabelReturn>{label}</Styled.LabelReturn>
  </Styled.Wrapper>
)

export default DefaultLayout
