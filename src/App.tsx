
// import MeuComponente from "./Componentes/MeuComponente"

import { ListaPokemons } from "./Componentes/ListaPokemons";
import { Navbar } from "./Componentes/Navbar";

export default function App() {

   // const [nomePokemon, serNomePokemon] = useState<string>("");
   // const [pokemon, setPokemon] = useState<pokemon | null>(null);
   // const [carregando, setCarregando] = useState(false);

   return (
      <>
         <Navbar/>
         <main className="flex flex-col items-center w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wuKyYIE3TNWI5x6pdp9naZitPLcfOmzFhvzGvGllcNWwptIC')]">
            <section className="flex bg-gray-50 flex-col max-w-6xl p-6 h-screens">
               <ListaPokemons />
            </section>
         </main>
      </>
   )
}