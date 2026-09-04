import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

function Navbar() {
    return (
        <nav>
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Rowery Latoszyn Zdrój"
                    />
                </Link>
            </div>

            <div className="navbar-menu">
                <Link to="/#o-nas">O nas</Link>
                <Link to="/#oferta">Oferta</Link>
                <Link to="/#cennik">Cennik</Link>
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
            </div>
        </nav>
    )
}

export default Navbar