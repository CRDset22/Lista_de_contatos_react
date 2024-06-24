import { useNavigate } from 'react-router-dom'

import { ActionButton } from '../../styles'
import LetterCard from '../../components/LetterCard'
import * as S from './styles'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()

  const letters = []
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i))
  }
  letters.push(String.fromCharCode(42))

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <S.LetterCardContainer>
              {letters.map((letter, index) => (
                <LetterCard key={index} initialLetter={letter} />
              ))}
            </S.LetterCardContainer>
          </>
        ) : (
          <>
            <ActionButton onClick={() => navigate('/')}>
              Voltar para lista de Contatos
            </ActionButton>
          </>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
