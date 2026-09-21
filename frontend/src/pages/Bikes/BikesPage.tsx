import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BikesPage.css'

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
            'Lekka konstrukcja',
            'Wygodna pozycja',
            'Idealny na asfalt i szutry'
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
            'Amortyzowany widelec',
            'Terenowe opony',
            'Mocne hamulce'
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
            'Wspomaganie elektryczne',
            'Duży zasięg',
            'Komfortowa pozycja'
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
            'Mocne wspomaganie',
            'Amortyzacja',
            'Idealny na podjazdy'
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
            'Wygodna pozycja',
            'Łatwa obsługa',
            'Idealny na rekreację'
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
            'Napęd elektryczny',
            'Łatwa obsługa',
            'Idealna na krótkie przejazdy'
        ]
    }
]

const filters: { label: string; value: BikeType }[] = [
    { label: 'Wszystkie', value: 'all' },
    { label: 'Gravel', value: 'gravel' },
    { label: 'MTB', value: 'mtb' },
    { label: 'E-bike', value: 'ebike' },
    { label: 'E-MTB', value: 'emtb' },
    { label: 'Miejskie', value: 'city' },
    { label: 'Hulajnogi', value: 'scooter' }
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
                <div className="bikes-hero-content">

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
                        leśne trasy. Wybierz sprzęt dopasowany do swojego
                        stylu jazdy.
                    </p>

                    <div
                        className="bike-filters"
                        aria-label="Filtrowanie rowerów"
                    >
                        {filters.map((item) => (
                            <button
                                key={item.value}
                                type="button"
                                className={
                                    filter === item.value
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => setFilter(item.value)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

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
                                loading="lazy"
                            />
                        </div>

                        <div className="bike-content">

                            <p className="bike-type">
                                {bike.category}
                            </p>

                            <h2>{bike.name}</h2>

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