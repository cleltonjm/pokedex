import styled from "styled-components";
import { typeColors } from "../../utils/typeColors";

interface TypeProps {
  typeName: string
}

export const Pokemons = styled.ol`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 380px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 380px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const Pokemon = styled.li`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    padding: 1rem;
    border-radius: 1rem;

    background-color: #49d0b0;
`;

export const PokeNumber = styled.span`
    color: #000;
    opacity: .3;
    text-align: right;
    font-size: .625rem;
`;

export const PokeName = styled.span`
    text-transform: capitalize;
    color: #fff;
    margin-bottom: .25rem;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Types = styled.ol`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const Type = styled.li<TypeProps>`
    color: #fff;
    padding: .25rem .5rem;
    margin: .25rem 0;
    font-size: .625rem;
    border-radius: 1rem;
    filter: brightness(1.1);
    text-align: center;

    background-color: ${({ typeName }) => typeColors[typeName] || '#777'};
`;

export const Image = styled.img`
    max-width: 100%;
    height: 70px;
`;

