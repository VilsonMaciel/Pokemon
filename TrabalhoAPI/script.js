const PesquisaForm = document.getElementById("pesquisarForm")
const InputPokemonNome = document.getElementById("Buscar")
const fotoPokemon = document.getElementById("FotoPokemon")

async function BuscarDados(){
    try {
        const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const dadosConvertidos = await dados.json()
        fotoPokemon.src = dadosConvertidos.sprites.other.showdown.front_default
        console.log(dadosConvertidos)
    } catch (error) {
        
    }
}

PesquisaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    BuscarDados(InputPokemonNome.value)
})

BuscarDados()