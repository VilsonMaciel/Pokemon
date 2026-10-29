import { ListaPokemons } from "../Componentes/ListaPokemons";

export default function home() {
    return (
        <>
            <div className="flex flex-col justify-center pt-60 items-center w-full h-screen">
                <h1>Tela Inicial</h1>
                <main className="flex flex-col max-w-6xl h-screen">
                    <ListaPokemons />
                </main>
            </div>
        </>
    );
}