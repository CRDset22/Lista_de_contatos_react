class Contact {
  id: number
  fullName: string
  email: string
  phoneNumber: string

  constructor(
    id: number,
    fullName: string,
    email: string,
    phoneNumber: string
  ) {
    this.id = id
    this.fullName = fullName
    this.email = email
    this.phoneNumber = phoneNumber
  }
}

export default Contact
