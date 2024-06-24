import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active?: boolean
}

export const LetterCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  justify-items: center;
`

export const LetterCardButton = styled.button<Props>`
  padding: 8px;
  max-width: 36px;
  max-height: 36px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${variables.preto};
  background-color: ${(props) =>
    props.active ? variables.amareloAmbar : variables.laranjaEscuro};
  cursor: pointer;
  font-weight: bold;
  color: ${variables.branco};
`
