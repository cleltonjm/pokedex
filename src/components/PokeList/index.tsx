import { useEffect, useRef, useState } from 'react'
import { Detail, Pokemon, Pokemons, Type, Types, Image, PokeNumber, PokeName } from './styles'

import type { PokemonDetail, PokemonListResult } from '../../@types/PokeTypes'

import Button from '../Button'

export default function PokeList() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadPokemons = async () => {
    setLoading(true)

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=4`)
      const data: { results: PokemonListResult[] } = await response.json()

      const detailedPromises = data.results.map(async (poke): Promise<PokemonDetail> => {
        const res = await fetch(poke.url)
        return res.json()
      })

      const detailedPokemons = await Promise.all(detailedPromises)
      setPokemons(prev => [...prev, ...detailedPokemons])
      setOffset(prev => prev + 4)
    } catch (error) {
      console.error('Erro ao buscar pokémons:', error)
    } finally {
      setLoading(false)
    }
  }

  const didFetch = useRef(false)

  useEffect(() => {
    if (!didFetch.current) {
      loadPokemons()
      didFetch.current = true
    }
  }, [])

  return (
    <>
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
      
      <Button onClick={loadPokemons} loading={loading} />
    </>
  )
}