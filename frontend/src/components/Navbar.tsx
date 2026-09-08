import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="site-header">

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

            <nav>
                <div className="navbar-logo">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Rowery Latoszyn Zdrój"
                        />
                    </Link>
                </div>
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Otwórz menu"
                >
                    ☰
                </button>

                <p>{menuOpen ? 'OTWARTE' : 'ZAMKNIĘTE'}</p>

                <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <Link to="/#o-nas">O nas</Link>
                    <Link to="/#galeria">Galeria</Link>
                    <Link to="/#oferta">Oferta</Link>
                    <Link to="/rowery">Rowery</Link>
                    <Link to="/cennik">Cennik</Link>
                    <Link to="/trasy">Trasy</Link>
                    <Link to="/kontakt">Kontakt</Link>

                    <div className="navbar-socials">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>

                    <a
                        href="tel:+48000000000"
                        className="call-button"
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