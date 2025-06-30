import { ButtonContainer, ButtonMore } from "./styles";

interface LoadMoreButtonProps {
  onClick: () => void
  loading: boolean
}

export default function Button({ onClick, loading }: LoadMoreButtonProps) {
    return (
        <ButtonContainer>
            <ButtonMore onClick={onClick}>
                {loading ? 'Carregando...' : 'Carregar mais...'}
            </ButtonMore>
        </ButtonContainer>
    )
}