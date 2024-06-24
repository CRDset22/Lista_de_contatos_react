import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  ActionButton,
  FormField,
  Form,
  SecondaryTitle,
  MainContainer
} from '../../styles'
import { addHandle } from '../../store/reducers/contact'

const ContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      addHandle({
        fullName,
        email,
        phoneNumber
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <SecondaryTitle>Novo Contato</SecondaryTitle>
      <Form onSubmit={addContact}>
        <FormField
          type="text"
          placeholder="Nome"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FormField
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          type="tel"
          placeholder="Telefone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          componentWidth={'160px'}
        />
        <ActionButton type="submit">Cadastrar</ActionButton>
      </Form>
    </MainContainer>
  )
}

export default ContactForm
