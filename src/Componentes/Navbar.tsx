import { useState } from "react"

export function Navbar() {

    const [visivel, SetVisivel] = useState<string>('hidden');

    function mostrarOpcoes() {        
        if (visivel == "hidden") {
            SetVisivel("flex flex-col sm:flex-row")            
        } else {
            SetVisivel("hidden")
        }
    }


    return (
        <>
            <nav className="flex flex-col sm:flex-row items-center justify-around bg-black text-white p-4 sticky top-0 w-full h-fit">
                <img className="w-52" src="https://i.pinimg.com/736x/12/56/13/125613fecbc8b3476ffb71c0a60211c1.jpg" alt="" />
                    <ul className={visivel + ` justify-center items-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 font-semibold`}>
                        <li>Home</li>
                        <li>Catalogo</li>
                        <li>Pokedéx</li>
                        <li>Sobre</li>
                    </ul>
                <button onClick={mostrarOpcoes} className="flex sm:hidden mt-5 sm:mt-0">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>
        </>
    )
}