import { useState } from "react"
import { testepokemons } from "../services/pokemonService"
import type { pokemon } from "../types"

export function ListaPokemons() {

    const [pokemons, setPokemons] = useState<pokemon[]>([])

    async function Carregar() {
        const lista = await testepokemons()
        setPokemons(lista)
    }

    return (
        <>
            <button onClick={Carregar}>Carregar</button>
            <ul>
                {pokemons.map((pokemon) => (
                    <div key={pokemon.name}>
                        <li>{pokemon.name}</li>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                ))}
            </ul>
        </>
    )

}