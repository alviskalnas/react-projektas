import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="image-wrapper">
                        <Link to="/">
                            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg" alt="CodeAcademy logo" className={`logo white ${isScrolled ? 'hidden' : ''}`} />
                            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt="CodeAcademy logo" className={`logo black ${isScrolled ? '' : 'hidden'}`} />
                        </Link>
                    </div>


                    <nav className={`main-navigation ${isScrolled ? 'scrolled' : ''}`}>
                        <ul className="main-menu">
                            <li className="menu-item"><a className="menu-link" href="/">Studentams</a></li>
                            <li className="menu-item"><a className="menu-link" href="/">Verslui</a></li>
                            <li className="menu-item">
                                <Link className="menu-link" to="/programs">Programos</Link>
                            </li>
                            <li className="menu-item"><a className="menu-link" href="/">Apie mus</a></li>
                            <li className="menu-item">
                                <Link className="menu-link" to="/news">Naujienos</Link>
                            </li>
                            <li className="menu-item"><a className="menu-link" href="/">IT testas</a></li>
                            <li className="menu-item"><a className="menu-link" href="/">Kontaktai</a></li>
                            <li className="menu-item"><a className="menu-link" href="/">EN</a></li>
                        </ul>
                    </nav>
                    <div className="header-additional">
                        <a className="button" href="tel:+37045646444">Skambinti</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
