import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <Calculator size={32} color="#3b82f6" />
                    <span>Eng<span className="highlight">Math</span></span>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#curriculum" onClick={() => setIsOpen(false)}>Curriculum</a>
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
                    <button className="btn btn-primary mobile-btn">Enroll Now</button>
                </div>

                <div className="desktop-btn">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
