import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contact'

type ContactState = {
  contacts: Contato[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      fullName: 'Osbaldo',
      email: 'osbaldo@dibaldi.com',
      phoneNumber: '13812854171'
    },
    {
      id: 2,
      fullName: 'Asnésio',
      email: 'asnesio@asnesio.com',
      phoneNumber: '18471552424'
    },
    {
      id: 3,
      fullName: 'Isnaldo',
      email: 'isnaldo@sounaldo.com',
      phoneNumber: '14127756961'
    },
    {
      id: 4,
      fullName: 'Valdonaldo',
      email: 'valdonaldo@souvaldo.com',
      phoneNumber: '21239654794'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    addHandle: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const existsContact = state.contacts.find(
        (t) =>
          t.fullName.toLowerCase() === action.payload.fullName.toLowerCase()
      )

      if (existsContact) {
        alert('Já existe um contato com esse nome!')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    updateHandle: (state, action: PayloadAction<Contato>) => {
      const indexContact = state.contacts.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.contacts[indexContact] = action.payload
      }
    },
    deleteHandle: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { addHandle, updateHandle, deleteHandle } = contactSlice.actions

export default contactSlice.reducer
