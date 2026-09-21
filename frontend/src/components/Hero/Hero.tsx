import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <p className="hero-label">
                    WYPOŻYCZALNIA ROWERÓW
                </p>

                <h1>
                    Odkryj okolice
                    <br />
                    na dwóch kołach
                </h1>

                <p className="hero-description">
                    Rowery gravel, MTB, elektryczne i miejskie
                    w Latoszynie-Zdroju. Wybierz rower i ruszaj
                    odkrywać okolicę.
                </p>

                <div className="hero-actions">
                    <Link
                        to="/rowery"
                        className="hero-button"
                    >
                        Zobacz rowery
                    </Link>

                    <Link
                        to="/trasy"
                        className="hero-button-secondary"
                    >
                        Zobacz trasy
                    </Link>
                </div>
            </div>

            <div className="hero-image">
                <img
                    src="/hero-latoszyn.png"
                    alt="Rower w Latoszynie-Zdroju"
                />
            </div>

        </section>
    )
}

export default Hero