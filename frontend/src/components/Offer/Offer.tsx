import { Link } from 'react-router-dom'
import './Offer.css'

const offers = [
    {
        number: '01',
        title: 'Na wycieczkę',
        description:
            'Gravel i rowery miejskie na spokojne wycieczki po Latoszynie-Zdroju i okolicy.'
    },
    {
        number: '02',
        title: 'W teren',
        description:
            'MTB i E-MTB dla osób, które chcą ruszyć na leśne drogi i bardziej wymagające trasy.'
    },
    {
        number: '03',
        title: 'Ze wspomaganiem',
        description:
            'E-bike pozwoli przejechać więcej kilometrów i łatwiej pokonać okoliczne podjazdy.'
    }
]

function Offer() {
    return (
        <section id="oferta" className="offer">

            <div className="offer-heading">

                <div>
                    <p className="offer-label">
                        NASZA OFERTA
                    </p>

                    <h2>
                        Wybierz swój sposób
                        <br />
                        na odkrywanie okolicy
                    </h2>
                </div>

                <Link
                    to="/rowery"
                    className="offer-all-button"
                >
                    Zobacz wszystkie rowery
                </Link>

            </div>

            <div className="offer-grid">

                {offers.map((offer) => (
                    <article
                        className="offer-card"
                        key={offer.number}
                    >
                        <span className="offer-number">
                            {offer.number}
                        </span>

                        <h3>{offer.title}</h3>

                        <p>{offer.description}</p>

                        <Link to="/rowery">
                            Zobacz rowery →
                        </Link>
                    </article>
                ))}

            </div>

        </section>
    )
}

export default Offer