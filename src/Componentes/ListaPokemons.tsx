import { useEffect, useState } from "react"
import { buscarPokemons } from "../services/pokemonService"
import type { pokemon } from "../types"
import { formatarNomePokemon } from "../services/formatarString"

export function ListaPokemons() {

    const [pokemons, setPokemons] = useState<pokemon[]>([])
    
    useEffect(() => { // Execurta Carregar() assim que o componente é carregado
        async function carregar() {
            const dados = await buscarPokemons()
            setPokemons(dados)
        }
        carregar()
    })

    return (
        <>
            <ul className="flex flex-wrap min-w-0 gap-10 justify-center">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name} className="flex flex-col w-40 h-52 items-center justify-between  bg-gray-200 ">
                        <img className="w-32 h-32 p-4" src={pokemon.sprites.versions["generation-viii"]["brilliant-diamond-shining-pearl"].icons.front_default} alt="" />
                        <h1 className="bg-yellow-300 w-full text-center ">{formatarNomePokemon(pokemon)}</h1>
                    </li>
                ))}
            </ul>
        </>
    )

}