import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const navigate = useNavigate();
  const menu = [
    {
      category: 'Pastéis (Salgados)',
      items: [
        { name: 'Carne', desc: '', price: 'R$ 7,00' },
        { name: 'Queijo', desc: '', price: 'R$ 7,00' },
        { name: 'Frango', desc: '', price: 'R$ 7,00' },
        { name: 'Calabresa', desc: '', price: 'R$ 7,00' },
        { name: 'Pizza', desc: '', price: 'R$ 7,00' },
        { name: 'Presunto/Mussarela', desc: '', price: 'R$ 7,00' },
        { name: 'Palmito com Catupiry', desc: '', price: 'R$ 12,00' },
        { name: 'Brócolis/Calabresa com Catupiry', desc: '', price: 'R$ 12,00' },
      ],
    },
    {
      category: 'Pastéis Doces',
      items: [
        { name: 'Goiabada e Queijo', desc: '', price: 'R$ 12,00' },
        { name: 'Doce de Leite', desc: '', price: 'R$ 12,00' },
      ],
    },
    {
      category: 'Salgados Fritos',
      items: [
        { name: 'Coxinha de Frango', desc: '', price: 'R$ 8,00' },
        { name: 'Coxinha de Frango c/ Catupiry', desc: '', price: 'R$ 8,00' },
        { name: 'Kibe de Carne', desc: '', price: 'R$ 8,00' },
        { name: 'Kibe c/ Catupiry', desc: '', price: 'R$ 8,00' },
        { name: 'Kibe c/ Ovo', desc: '', price: 'R$ 8,00' },
        { name: 'Kibe c/ Queijo', desc: '', price: 'R$ 8,00' },
        { name: 'Enrolado de Salsicha', desc: '', price: 'R$ 8,00' },
        { name: 'Enrolado de Presunto e Mussarela', desc: '', price: 'R$ 8,00' },
      ],
    },
    {
      category: 'Assados',
      items: [
        { name: 'Pão Pizza', desc: '', price: 'R$ 9,00' },
        { name: 'Hot Dog', desc: '', price: 'R$ 9,00' },
        { name: 'Catarina de Frango c/ Catupiry', desc: '', price: 'R$ 9,00' },
        { name: 'Esfirra Carne', desc: '', price: 'R$ 9,00' },
        { name: 'Esfirra Calabresa', desc: '', price: 'R$ 9,00' },
        { name: 'Hamburguesa', desc: '', price: 'R$ 12,00' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-amber-50 text-amber-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 my-6">
          <button onClick={() => navigate(-1)} aria-label="Voltar" className="px-3 py-1 bg-amber-900 text-white rounded hover:bg-amber-800">← Voltar</button>
          <h1 className="text-4xl font-bold">Nosso Cardápio</h1>
        </div>

        {menu.map((cat) => (
          <section key={cat.category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{cat.category}</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {cat.items.map((item) => (
                <li key={item.name} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="text-amber-900 font-bold">{item.price}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

export default MenuPage;
