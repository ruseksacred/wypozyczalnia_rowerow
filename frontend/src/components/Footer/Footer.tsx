import { Link } from 'react-router-dom'
import {
    FaFacebookF,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa'

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">

                    <Link
                        to="/"
                        className="footer-logo"
                        aria-label="Rowery Latoszyn Zdrój - strona główna"
                    >
                        <img
                            src="/logo.png"
                            alt="Rowery Latoszyn Zdrój"
                        />
                    </Link>

                    <p>
                        Wypożyczalnia rowerów w Latoszynie-Zdroju
                        i okolicach. Wybierz rower i ruszaj odkrywać
                        region na dwóch kołach.
                    </p>

                    <div className="footer-socials">

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

                </div>


                <div className="footer-links">

                    <h3>Nawigacja</h3>

                    <Link to="/">
                        Strona główna
                    </Link>

                    <Link to="/#o-nas">
                        O nas
                    </Link>

                    <Link to="/#oferta">
                        Oferta
                    </Link>

                    <Link to="/rowery">
                        Rowery
                    </Link>

                    <Link to="/cennik">
                        Cennik
                    </Link>

                    <Link to="/trasy">
                        Trasy
                    </Link>

                    <Link to="/kontakt">
                        Kontakt
                    </Link>

                </div>


                <div className="footer-contact">

                    <h3>Kontakt</h3>

                    <div className="footer-contact-item">

                        <FaMapMarkerAlt />

                        <span>
                            Latoszyn-Zdrój 147j
                        </span>

                    </div>

                    <a
                        href="tel:+48791020803"
                        className="footer-contact-item"
                    >
                        <FaPhone />

                        <span>
                            +48 791 020 803
                        </span>
                    </a>

                    <a
                        href="mailto:rowery.latoszynzdroj@gmail.com"
                        className="footer-contact-item"
                    >
                        <FaEnvelope />

                        <span>
                            rowery.latoszynzdroj@gmail.com
                        </span>
                    </a>

                </div>


                <div className="footer-hours">

                    <h3>Godziny otwarcia</h3>

                    <div className="footer-hours-row">
                        <span>Pon. – Pt.</span>
                        <strong>9:00 – 18:00</strong>
                    </div>

                    <div className="footer-hours-row">
                        <span>Sobota</span>
                        <strong>9:00 – 18:00</strong>
                    </div>

                    <div className="footer-hours-row">
                        <span>Niedziela</span>
                        <strong>10:00 – 17:00</strong>
                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 Rowery Latoszyn Zdrój. Wszystkie prawa zastrzeżone.
                </p>

                <Link to="/kontakt">
                    Skontaktuj się z nami
                </Link>

            </div>

        </footer>
    )
}

export default Footer