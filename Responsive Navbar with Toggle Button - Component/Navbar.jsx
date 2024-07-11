import { useState } from 'react';

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); }

    const closeMenu = () => { setIsMenuOpen(false); }

    return (
        <header>
            <nav className="flex items-center justify-center fixed top-0 left-0 w-full z-50 bg-gray-800/60 py-6 px-20 backdrop-blur-md">
                    <div className="md:hidden">
                        <button className="text-white" onClick={toggleMenu}>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                                className='w-6 h-6'
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-12">
                        <li><a href="#" className="aNavbar">#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar">#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar">#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar">#YOUR_SECTION#</a></li>
                    </ul>
               
                {isMenuOpen ? (
                    <ul className="flex-col h-[100vh] content-center md:hidden space-y-8 text-center">
                        <li><a href="#" className="aNavbar" onClick={closeMenu}>#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar" onClick={closeMenu}>#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar" onClick={closeMenu}>#YOUR_SECTION#</a></li>
                        <li><a href="#" className="aNavbar" onClick={closeMenu}>#YOUR_SECTION#</a></li>
                    </ul>
                ) : null}
            </nav>
        </header>
    );
}
