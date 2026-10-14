import type { pokemon } from "../types"

export function formatarNomePokemon(nome: pokemon) {
    if (!nome) {return ""}
    return nome.name.charAt(0).toUpperCase() + nome.name.slice(1)
}