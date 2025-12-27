import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            setOpen(false);
        }
    };

    return (
        <nav className="bg-amber-900 text-white p-3 md:p-4 fixed w-full z-50">
            <div className="max-w-6xl mx-auto relative px-4 flex items-center justify-between">
                {/* Desktop links: centralizados */}
                <div className="flex-1 flex justify-center">
                    
                    <ul className="hidden md:flex justify-center gap-6 lg:gap-8 font-arimo text-sm md:text-lg uppercase">
                        <a href="#sobre" onClick={handleClick} className="text-white hover:text-amber-400 transition-colors duration-300">Sobre</a>
                        <Link to="/cardapio" className="text-white hover:text-amber-400 transition-colors duration-300">Cardápio</Link>
                        <a href="#contato" onClick={handleClick} className="text-white hover:text-amber-400 transition-colors duration-300">Contato</a>
                    </ul>
                </div>

                {/* Mobile hamburger (à direita) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen((s) => !s)}
                        aria-label="Abrir menu"
                        className="p-2 rounded-md text-white hover:text-amber-400"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            {open && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm w-full absolute left-0 top-full shadow-lg">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <a href="#sobre" onClick={handleClick} className="text-white hover:text-amber-400 text-base">Sobre</a>
                        <Link to="/cardapio" onClick={() => setOpen(false)} className="text-white hover:text-amber-400 text-base">Cardápio</Link>
                        <a href="#contato" onClick={handleClick} className="text-white hover:text-amber-400 text-base">Contato</a>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;