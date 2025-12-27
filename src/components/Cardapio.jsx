import { Link } from "react-router-dom";

function Cardapio() {
    return(
        <section id="cardapio" className="py-20 bg-amber-50 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12">Nosso Cardápio</h2>
            <Link to="/cardapio" aria-label="Acessar Cardápio" className="bg-amber-700 inline-block py-2 md:px-24 md:py-6 mx-auto px-8 font-bold text-2xl md:text-5xl text-white rounded-md hover:bg-amber-800 transition">Acessar</Link>
          </div>
        </section>

    );
}

export default Cardapio;