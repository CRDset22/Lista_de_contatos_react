import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { MainContainer, SecondaryTitle } from '../../styles'
import Contact from '../../components/Contact'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  const { initialLetter } = useSelector((state: RootReducer) => state.filter)

  const contactsFilter = () => {
    let filteredContacts = contacts

    if (initialLetter !== undefined && initialLetter !== '*') {
      filteredContacts = filteredContacts.filter(
        (contacts) =>
          contacts.fullName.toUpperCase().substring(0, 1) === initialLetter
      )
      return filteredContacts
    } else {
      return contacts
    }
  }

  const contactsFiltered = contactsFilter()

  return (
    <MainContainer>
      <SecondaryTitle>Lista de Contatos</SecondaryTitle>
      <ul>
        {contactsFiltered.map((c) => (
          <li key={c.id}>
            <Contact
              id={c.id}
              fullName={c.fullName}
              email={c.email}
              phoneNumber={c.phoneNumber}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
