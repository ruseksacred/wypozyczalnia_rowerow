import { useState } from 'react'
import { Link } from 'react-router-dom'

type BikeType =
    | 'all'
    | 'gravel'
    | 'mtb'
    | 'ebike'
    | 'emtb'
    | 'city'
    | 'scooter'

type Bike = {
    id: number
    name: string
    type: Exclude<BikeType, 'all'>
    category: string
    description: string
    image: string
    features: string[]
}

const bikes: Bike[] = [
    {
        id: 1,
        name: 'Gravel',
        type: 'gravel',
        category: 'GRAVEL',
        description:
            'Lekki i szybki rower idealny na asfalt, szutry i dłuższe wycieczki.',
        image: '/bike-gravel.jpg',
        features: [
            'lekka konstrukcja',
            'wygodna pozycja',
            'idealny na asfalt i szutry'
        ]
    },
    {
        id: 2,
        name: 'MTB',
        type: 'mtb',
        category: 'MTB',
        description:
            'Klasyczny rower górski przygotowany do jazdy po lesie i bardziej wymagającym terenie.',
        image: '/bike-mtb.jpg',
        features: [
            'amortyzowany widelec',
            'terenowe opony',
            'mocne hamulce'
        ]
    },
    {
        id: 3,
        name: 'E-bike',
        type: 'ebike',
        category: 'E-BIKE',
        description:
            'Komfortowy rower ze wspomaganiem elektrycznym na dłuższe wycieczki i podjazdy.',
        image: '/bike-ebike.jpg',
        features: [
            'wspomaganie elektryczne',
            'duży zasięg',
            'komfortowa pozycja'
        ]
    },
    {
        id: 4,
        name: 'E-MTB',
        type: 'emtb',
        category: 'E-MTB',
        description:
            'Elektryczny rower górski dla osób, które chcą eksplorować lasy i trudniejsze trasy.',
        image: '/bike-emtb.jpg',
        features: [
            'mocne wspomaganie',
            'amortyzacja',
            'idealny na podjazdy'
        ]
    },
    {
        id: 5,
        name: 'Rower miejski',
        type: 'city',
        category: 'MIEJSKI',
        description:
            'Wygodny rower na spokojną wycieczkę po Latoszynie-Zdroju i okolicy.',
        image: '/bike-city.jpg',
        features: [
            'wygodna pozycja',
            'łatwa obsługa',
            'idealny na rekreację'
        ]
    },
    {
        id: 6,
        name: 'Hulajnoga elektryczna',
        type: 'scooter',
        category: 'HULAJNOGA',
        description:
            'Szybki i wygodny sposób na krótkie przejazdy po okolicy.',
        image: '/scooter-electric.jpg',
        features: [
            'napęd elektryczny',
            'łatwa obsługa',
            'idealna na krótkie przejazdy'
        ]
    }
]

function BikesPage() {
    const [filter, setFilter] = useState<BikeType>('all')

    const filteredBikes =
        filter === 'all'
            ? bikes
            : bikes.filter((bike) => bike.type === filter)

    return (
        <main className="bikes-page">

            <section className="bikes-hero">
                <p className="bikes-label">
                    NASZA FLOTA
                </p>

                <h1>
                    Wybierz sprzęt
                    <br />
                    dla siebie
                </h1>

                <p className="bikes-intro">
                    Od spokojnej wycieczki po okolicy po wymagające
                    leśne trasy. Wybierz rower dopasowany do swojego
                    stylu jazdy.
                </p>

                <div className="bike-filters">

                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        Wszystkie
                    </button>

                    <button
                        className={filter === 'gravel' ? 'active' : ''}
                        onClick={() => setFilter('gravel')}
                    >
                        Gravel
                    </button>

                    <button
                        className={filter === 'mtb' ? 'active' : ''}
                        onClick={() => setFilter('mtb')}
                    >
                        MTB
                    </button>

                    <button
                        className={filter === 'ebike' ? 'active' : ''}
                        onClick={() => setFilter('ebike')}
                    >
                        E-bike
                    </button>

                    <button
                        className={filter === 'emtb' ? 'active' : ''}
                        onClick={() => setFilter('emtb')}
                    >
                        E-MTB
                    </button>

                    <button
                        className={filter === 'city' ? 'active' : ''}
                        onClick={() => setFilter('city')}
                    >
                        Miejskie
                    </button>

                    <button
                        className={filter === 'scooter' ? 'active' : ''}
                        onClick={() => setFilter('scooter')}
                    >
                        Hulajnogi
                    </button>

                </div>
            </section>

            <section className="bikes-list">

                {filteredBikes.map((bike) => (
                    <article
                        className="bike-card"
                        key={bike.id}
                    >
                        <div className="bike-image">
                            <img
                                src={bike.image}
                                alt={bike.name}
                            />
                        </div>

                        <div className="bike-content">
                            <p className="bike-type">
                                {bike.category}
                            </p>

                            <h2>
                                {bike.name}
                            </h2>

                            <p className="bike-description">
                                {bike.description}
                            </p>

                            <ul>
                                {bike.features.map((feature) => (
                                    <li key={feature}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/kontakt">
                                Zapytaj o dostępność
                            </Link>
                        </div>
                    </article>
                ))}

            </section>

        </main>
    )
}

export default BikesPage