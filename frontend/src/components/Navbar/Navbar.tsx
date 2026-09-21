import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaFacebookF,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa'

import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="site-header">

            {/* GÓRNY PASEK */}
            <div className="topbar">
                <div className="topbar-content">

                    <div className="topbar-item">
                        <FaMapMarkerAlt />
                        <span>Latoszyn-Zdrój 147j</span>
                    </div>

                    <a
                        href="mailto:rowery.latoszynzdroj@gmail.com"
                        className="topbar-item"
                    >
                        <FaEnvelope />
                        <span>rowery.latoszynzdroj@gmail.com</span>
                    </a>

                    <a
                        href="tel:+48791020803"
                        className="topbar-item"
                    >
                        <FaPhone />
                        <span>+48 791 020 803</span>
                    </a>

                </div>
            </div>

            {/* GŁÓWNA NAWIGACJA */}
            <nav>

                {/* LOGO */}
                <div className="navbar-logo">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        aria-label="Strona główna"
                    >
                        <img
                            src="/logo.png"
                            alt="Rowery Latoszyn Zdrój"
                        />
                    </Link>
                </div>

                {/* HAMBURGER */}
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                >
                    {menuOpen ? '×' : '☰'}
                </button>

                {/* MENU */}
                <div
                    id="main-navigation"
                    className={`navbar-menu ${menuOpen ? 'open' : ''}`}
                >
                    <Link to="/#o-nas" onClick={closeMenu}>
                        O nas
                    </Link>

                    <Link to="/#galeria" onClick={closeMenu}>
                        Galeria
                    </Link>

                    <Link to="/#oferta" onClick={closeMenu}>
                        Oferta
                    </Link>

                    <Link to="/rowery" onClick={closeMenu}>
                        Rowery
                    </Link>

                    <Link to="/cennik" onClick={closeMenu}>
                        Cennik
                    </Link>

                    <Link to="/trasy" onClick={closeMenu}>
                        Trasy
                    </Link>

                    <Link to="/kontakt" onClick={closeMenu}>
                        Kontakt
                    </Link>

                    {/* SOCIAL MEDIA */}
                    <div className="navbar-socials">

                        <a
                            href="#"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                    </div>

                    {/* TELEFON */}
                    <a
                        href="tel:+48791020803"
                        className="call-button"
                        onClick={closeMenu}
                    >
                        <FaPhone />
                        <span>Zadzwoń teraz</span>
                    </a>

                </div>

            </nav>

        </header>
    )
}

export default Navbar