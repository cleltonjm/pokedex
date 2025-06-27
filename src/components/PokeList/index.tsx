import { useEffect, useState } from 'react'
import { Detail, Pokemon, Pokemons, Type, Types, Image, PokeNumber, PokeName } from './styles'

type PokemonListResult = {
  name: string;
  url: string;
};

type PokemonDetail = {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
};

export default function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        const data: { results: PokemonListResult[] } = await response.json()

        const detailedPromises = data.results.map(async (poke): Promise<PokemonDetail> => {
          const res = await fetch(poke.url)
          return res.json()
        })

        const detailedPokemons = await Promise.all(detailedPromises)
        setPokemons(detailedPokemons)
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error)
      }
    }

    fetchPokemons()
  }, [])

  return (
    <Pokemons>
      {pokemons.map((poke) => (
        <Pokemon key={poke.id}>
          <PokeNumber>#{poke.id.toString().padStart(3, '0')}</PokeNumber>
          <PokeName>{poke.name}</PokeName>

          <Detail>
            <Types>
              {poke.types.map((t) => (
                <Type key={t.type.name} typeName={t.type.name}>{t.type.name}</Type>
              ))}
            </Types>

            <Image
              src={poke.sprites.other.dream_world.front_default}
              alt={poke.name}
            />
          </Detail>
        </Pokemon>
      ))}
    </Pokemons>
  )
}