import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#">Shinjiro Koizumi</a>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#policies">Policies</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact" className="btn btn-sm">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
