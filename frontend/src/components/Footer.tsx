import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Rowery Latoszyn Zdrój"
                        />
                    </Link>

                    <p>
                        Wypożyczalnia rowerów w Latoszynie-Zdroju
                        i okolicach.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Nawigacja</h3>

                    <Link to="/">Strona główna</Link>
                    <Link to="/#o-nas">O nas</Link>
                    <Link to="/#oferta">Oferta</Link>
                    <Link to="/#cennik">Cennik</Link>
                    <Link to="/trasy">Trasy</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>

                <div className="footer-contact">
                    <h3>Kontakt</h3>

                    <p>📍 Latoszyn-Zdrój 147j</p>
                    <p>📞 +48 791 020 803</p>
                    <p>✉️ rowery.latoszynzdroj@gmail.com</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Wypożyczalnia Rowerów. Wszystkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    )
}

export default Footer