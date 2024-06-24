import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variables'

type Props = {
  componentWidth?: string
}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: ${variaveis.branco}
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 196px auto;
`

export const SecondaryTitle = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const ActionButton = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.laranjaEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.laranjaEscuro};
  background-color: ${variaveis.amareloAmbar};
  padding: 16px;
  margin: 16px 0;
  border-radius: 16px;
`

export const FormField = styled.input<Props>`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: ${({ componentWidth = '100%' }) => componentWidth};
`

export default EstiloGlobal
