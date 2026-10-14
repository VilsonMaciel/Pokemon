import { useState } from "react";

// export function Funcao() {

//     return (
//         <>
//             <h1>teste</h1>

//         </>
//     )

//     // const [email, setEmail] = useState("")
//     // setEmail("")
//     // return (
//     //     <>
//     //     {email}
//     //     <input onChange={(e) => setEmail(e.target.value)} type="text"/>
//     //     </>
//     // )

//     // return (
//     //     <>
//     //         {contador}
//     //         <button onClick={setContador(contador + 1)}>Clicar</button>
//     //     </>
//     // )
// }

// export default function Contador() {
//     const [contador, setContador] = useState(0)

//     return (
//         <>
//             <h1>Contador {contador}</h1>

//             <button onClick={() => setContador(contador + 1)}>Mais</button>
//             <button onClick={() => setContador(contador - 1)}>Menos</button>
//         </>
//     )
// }

// export function Esconder() {

//     const [visivel, setVisivel] = useState("texto")

//     function esconderTexto() {
//         setVisivel("")
//     }

//     function mostrarTexto() {
//         setVisivel("texto")
//     }

//     return (
//         <>
//             {visivel}

//             <button onClick={() => esconderTexto()}>Esconder</button>
//             <button onClick={() => mostrarTexto()}>Mostrar</button>
//         </>
//     )
// }

export function Cumprimento() {

    const [texto, setTexto] = useState("Digite seu nome")

    function mensagem(nome: string) {
        if (nome != "") {
            setTexto("Olá " + nome)
        } else {
            setTexto("Digite seu nome")
        }
    }
    return (
        <>
            {texto}
            <input type="text" onChange={(t) => mensagem(t.target.value)} />
        </>
    )
}