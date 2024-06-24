import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ContactClass from '../../models/Contact'
import { deleteHandle, updateHandle } from '../../store/reducers/contact'

import { FormField, ActionButton } from '../../styles'
import * as S from './styles'

type Props = ContactClass

const Contact = ({
  id: originalId,
  fullName: originalFullName,
  email: originalEmail,
  phoneNumber: originalPhoneNumber
}: Props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState(-1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    if (originalId !== -1) {
      setId(originalId)
      console.log(originalId)
    }
  }, [originalId])

  useEffect(() => {
    if (originalFullName.length > 0) {
      setFullName(originalFullName)
    }
  }, [originalFullName])

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
  }, [originalEmail])

  useEffect(() => {
    if (originalPhoneNumber.length > 0) {
      setPhoneNumber(originalPhoneNumber)
    }
  }, [originalPhoneNumber])

  const cancelEditMode = () => {
    setEditMode(false)
    setFullName(originalFullName)
    setEmail(originalEmail)
    setPhoneNumber(originalPhoneNumber)
  }

  return (
    <S.ContactCard>
      <FormField
        disabled={!editMode}
        type="text"
        placeholder="Nome"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <FormField
        disabled={!editMode}
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        disabled={!editMode}
        type="tel"
        placeholder="Telefone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        componentWidth={'160px'}
      />
      <div>
        {editMode ? (
          <>
            <ActionButton
              onClick={() => {
                dispatch(updateHandle({ id, fullName, email, phoneNumber }))
                setEditMode(false)
              }}
            >
              Salvar
            </ActionButton>
            <ActionButton onClick={cancelEditMode}>Cancelar</ActionButton>
          </>
        ) : (
          <>
            <ActionButton onClick={() => setEditMode(true)}>
              Editar
            </ActionButton>
            <ActionButton onClick={() => dispatch(deleteHandle(id))}>
              Excluir
            </ActionButton>
          </>
        )}
      </div>
    </S.ContactCard>
  )
}

export default Contact
