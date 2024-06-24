import styled from 'styled-components'

import { ActionButton } from '../../styles'
import variables from '../../styles/variables'

export const CancelButton = styled(ActionButton)`
  background-color: ${variables.roxoEscuro};
`

export const SaveButton = styled(ActionButton)`
  background-color: ${variables.vermelho};
`

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 8px;
  background-color: ${variables.amareloAmbar};
  padding: 16px;
  margin: 16px 0;
  border-radius: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`
