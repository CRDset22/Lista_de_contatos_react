import { useDispatch, useSelector } from 'react-redux'

import { LetterCardButton } from './styles'
import { filterByInitialLetter } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export type Props = {
  initialLetter: string
}

const LetterCard = ({ initialLetter }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const isActiveLetterFilter = () => {
    return filter.initialLetter === initialLetter
  }

  const filterList = () => {
    dispatch(filterByInitialLetter(initialLetter))
  }

  const activeLetter = isActiveLetterFilter()

  return (
    <LetterCardButton active={activeLetter} onClick={filterList}>
      {initialLetter}
    </LetterCardButton>
  )
}

export default LetterCard
