import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contatos from './pages/contatos';

export default function App() {
   return (
      <BrowserRouter>
         <nav className="flex items-center fixed bg-black w-full h-fit p-4 space-x-10 text-white">
            <img className="w-32" src="https://tse1.mm.bing.net/th/id/OIP.uy2MTHPDzkTyf83YHTkVlAHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <Link to={"/"}>Home</Link>
            <Link to={"/sobre"}>Sobre</Link>
            <Link to={"/contatos"}>Contatos</Link>
         </nav>
         <div>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/sobre" element={<Sobre/>} />
               <Route path="/contatos" element={<Contatos/>} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}