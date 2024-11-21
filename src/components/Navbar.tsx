import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Bookbtn from './Bookbtn';

function Navbar() {
    const [isClicked, setClicked] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!isClicked);
    };

    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeStyle = 'text-[#474747] font-semibold bg-[#DBDFD0] px-2 py-1 rounded';

    return (
        <div>
            {/* Navbar */}
            <div 
                className={`w-full h-[84px] flex justify-between items-center px-3 bg-[#F9F9F7] z-[1000] ${isScrolled ? 'fixed top-0 z-50 shadow-md' : ''}`}
            >
                <div className="flex items-center md:gap-2">
                    <img className="w-[25px] h-[25px] md:w-[56px] lg:h-[55px]" src={logo} alt="logo" />
                    <p className="custom-font font-semibold text-[#474747] text-lg md:text-2xl">Bistro Bliss</p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="flex gap-3 text-center gap-7">
                        <li>
                            <a 
                                href="/" 
                                className={`${location.pathname === '/' ? activeStyle : ''}`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/about" 
                                className={`${location.pathname === '/about' ? activeStyle : ''}`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/menu" 
                                className={`${location.pathname === '/menu' ? activeStyle : ''}`}
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/book" 
                                className={`${location.pathname === '/book' ? activeStyle : ''}`}
                            >
                                Book
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/blog" 
                                className={`${location.pathname === '/blog' ? activeStyle : ''}`}
                            >
                                Blog
                            </a>
                        </li>

                        <li>
                            <a 
                                href="/contact" 
                                className={`${location.pathname === '/contact' ? activeStyle : ''}`}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Book Button on Desktop */}
                <div className="mt-3 hidden lg:flex">
                    <Bookbtn />
                </div>

                {/* Hamburger Icon for Mobile */}
                <div 
                    onClick={handleClick}
                    className="flex flex-col gap-1 cursor-pointer md:hidden"
                >
                    <div className={`w-[25px] h-[4px] bg-black transition-transform duration-300 ${isClicked ? 'rotate-45 translate-y-[7px] opacity-0' : ''}`}></div>
                    <div className={`w-[25px] h-[4px] bg-black transition-opacity duration-300 ${isClicked ? 'opacity-0' : ''}`}></div>
                    <div className={`w-[25px] h-[4px] bg-black transition-transform duration-300 ${isClicked ? '-rotate-45 -translate-y-[9px] opacity-0' : ''}`}></div>
                </div>
            </div>

            {/* Full-Screen Dropdown Menu for Mobile */}
            <div className={`fixed md:hidden inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white transition-transform duration-300 z-[600] ${isClicked ? 'translate-y-0' : 'translate-y-full'}`}>
                <ul className="flex flex-col items-center gap-6 text-center text-lg">
                    <li>
                        <a 
                            href="/" 
                            className={`${location.pathname === '/' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/about" 
                            className={`${location.pathname === '/about' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/menu" 
                            className={`${location.pathname === '/menu' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            Menu
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/book" 
                            className={`${location.pathname === '/book' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            Book
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/blog" 
                            className={`${location.pathname === '/blog' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            Blog
                        </a>
                    </li>

                    <li>
                        <a 
                            href="/contact" 
                            className={`${location.pathname === '/contact' ? activeStyle : ''}`}
                            onClick={() => setClicked(false)}
                        >
                            Contact
                        </a>
                    </li>


                </ul>
                <div className="mt-10">
                    <Bookbtn />
                </div>
                {/* Close Button */}
                <div className='flex items-center justify-center'>
                <button 
                    className="absolute bottom-10 right-[50%] text-2xl text-black border px-2 rounded-full bg-white shadow shadow-lg" 
                    onClick={() => setClicked(false)}
                >
                    &times;
                </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
