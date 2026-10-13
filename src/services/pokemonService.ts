import { useEffect, useState } from "react";
import type { pokemon } from "../types";

const api_url = "https://pokeapi.co/api/v2/pokemon";

// export async function buscarPokemon(name: string) {
//     const resposta = await fetch(`${api_url}/${name}`);

//     if (!resposta.ok) {
//         throw new Error("Erro ao buscar pokemon");
//     }

//     const dados = await resposta.json();

//     return dados;
// }

// export async function buscarPokemons() {

//     const respostaApi = await fetch(`${api_url}`);

//     if (!respostaApi.ok) {
//         throw new Error("Erro ao buscar pokemons");
//     }

//     const dados = respostaApi.json()

//     return dados;
// }

// export async function listarPokemons() {
//     const pokemons = []

//     const dados = buscarPokemons();
//     dados
//         .then(resultado => (
//             resultado.results.forEach(elemento => {
//                 pokemons.push(elemento)
//             })
//         ))
//     return pokemons;
// }

// export async function urlsCadaPokemon() {
//     const [pokemons, setPokemons] = useState<pokemon[]>([])

//     // useEffect(() => {
//     //     buscarPokemons().then((resultado) => {
//     //         setPokemons(resultado.results)
//     //     })
//     // })

//     const urls = []

//     pokemons.forEach(element => {
//         urls.push(element.url)
//     });

//     return urls
// }

export async function testepokemons() {
    const consulta = await fetch(`${api_url}`)

    var lista = [];

    const dados = await consulta.json()


    for(let i = 0; i< dados.results.length; i++){
          const consulta2 = await fetch(dados.results[i].url)
           const dados2 = await consulta2.json()
           lista.push(dados2)
    }


    return lista;
    
}