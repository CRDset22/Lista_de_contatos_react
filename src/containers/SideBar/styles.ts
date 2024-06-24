import styled from 'styled-components'

import variables from '../../styles/variables'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.laranja};
  height: 100vh;

  div {
    background-color: transparent;
  }
`

export const LetterCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  justify-items: center;
`
