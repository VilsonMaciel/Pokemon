const PesquisaForm = document.getElementById("pesquisarForm")
const InputPokemonNome = document.getElementById("Buscar")
const fotoPokemon = document.getElementById("FotoPokemon")
const nomepokemon = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const tipo = document.getElementById('tipo')
const habil = document.getElementById('habilidades')

async function BuscarDados(nome){
    try {
        const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const dadosConvertidos = await dados.json()
        fotoPokemon.src = dadosConvertidos.sprites.other.home.front_default
        
        nomepokemon.innerText = `Nome: ${dadosConvertidos.name}`
        
        let altura_convertida = dadosConvertidos.height * 10
        
        altura.innerText = `Altura: ${altura_convertida} cm`
        peso.innerText = `Peso: ${dadosConvertidos.weight} libras`
        tipo.innerText = `Tipo: ${dadosConvertidos.types[0].type.name}`
        habil.innerText = 'Habilidades: '
        
        for (let i = 0; i < dadosConvertidos.abilities.length; i++) {
            console.log(dadosConvertidos.abilities[i].ability.name); 
            const li = document.createElement('li');
            li.innerText = dadosConvertidos.abilities[i].ability.name;
            habil.appendChild(li)
        }        
        console.log(dadosConvertidos)
    } catch (error) {
        
    }
}

PesquisaForm.addEventListener("submit", (e) => {
    e.preventDefault()
    BuscarDados(InputPokemonNome.value)
})

BuscarDados()



