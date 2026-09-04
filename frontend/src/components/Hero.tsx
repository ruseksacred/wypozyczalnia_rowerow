import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-label">WYPOŻYCZALNIA ROWERÓW</p>

                <h1>
                    Odkryj okolice
                    <br />
                    na dwóch kołach
                </h1>

                <p className="hero-description">
                    Gravel, e-bike i e-MTB w Latoszynie-Zdroju i okolicach.
                </p>

                <Link to="/kontakt" className="hero-button">
                    Zapytaj o rower
                </Link>
            </div>

            <div className="hero-image">
                <img
                    src="/hero-latoszyn.png"
                    alt="Rower elektryczny w Latoszynie-Zdroju"
                />
            </div>
        </section>
    )
}

export default Hero