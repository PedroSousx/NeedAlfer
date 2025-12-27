import header from '../assets/header.jpg';
import { Link } from "react-router-dom";


function Header() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16" id='header'>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${header})` }}
          role="img"
          aria-label="Imagem de pratos"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-4">NEED ALFER</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">Os melhores salgados de Franca - SP</p>
        {/* <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
          Conheça Nossos Produtos
        </button> */}
        <Link to="/cardapio" aria-label="Acessar Cardápio" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">Conheça nossos produtos</Link>
      </div>
    </section>
  );
}

export default Header;