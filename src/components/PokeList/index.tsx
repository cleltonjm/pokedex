import { Detail, Pokemon, Pokemons, Type, Types, Image, PokeNumber, PokeName } from './styles'

export default function PokeList() {
    return (
        <Pokemons>
            <Pokemon>
                <PokeNumber>#001</PokeNumber>
                <PokeName>Bulbasaur</PokeName>

                <Detail>
                    <Types>
                        <Type>grass</Type>
                        <Type>poison</Type>
                    </Types>

                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur" />
                </Detail>
            </Pokemon>
        </Pokemons>
    )
}