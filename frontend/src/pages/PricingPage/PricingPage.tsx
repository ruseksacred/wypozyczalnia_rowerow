import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingPage.css'

type PricingType =
    | 'all'
    | 'gravel'
    | 'mtb'
    | 'ebike'
    | 'emtb'
    | 'city'
    | 'scooter'

type Price = {
    label: string
    price: string
}

type PricingItem = {
    id: number
    type: Exclude<PricingType, 'all'>
    category: string
    name: string
    description: string
    prices: Price[]
}

const pricing: PricingItem[] = [
    {
        id: 1,
        type: 'gravel',
        category: 'GRAVEL',
        name: 'Rower gravel',
        description:
            'Idealny na asfalt, szutry i dłuższe wycieczki po okolicy.',
        prices: [
            { label: '2 godziny', price: '40 zł' },
            { label: '4 godziny', price: '60 zł' },
            { label: 'Cały dzień', price: '100 zł' },
            { label: 'Weekend', price: '240 zł' }
        ]
    },
    {
        id: 2,
        type: 'mtb',
        category: 'MTB',
        name: 'Rower MTB',
        description:
            'Klasyczny rower górski na leśne drogi i wymagający teren.',
        prices: [
            { label: '2 godziny', price: '40 zł' },
            { label: '4 godziny', price: '60 zł' },
            { label: 'Cały dzień', price: '100 zł' },
            { label: 'Weekend', price: '240 zł' }
        ]
    },
    {
        id: 3,
        type: 'ebike',
        category: 'E-BIKE',
        name: 'Rower elektryczny',
        description:
            'Komfortowe wspomaganie na dłuższe trasy i okoliczne podjazdy.',
        prices: [
            { label: '2 godziny', price: '60 zł' },
            { label: '4 godziny', price: '90 zł' },
            { label: 'Cały dzień', price: '150 zł' },
            { label: 'Weekend', price: '350 zł' }
        ]
    },
    {
        id: 4,
        type: 'emtb',
        category: 'E-MTB',
        name: 'Elektryczny MTB',
        description:
            'Wspomaganie elektryczne połączone z możliwościami roweru terenowego.',
        prices: [
            { label: '2 godziny', price: '70 zł' },
            { label: '4 godziny', price: '110 zł' },
            { label: 'Cały dzień', price: '180 zł' },
            { label: 'Weekend', price: '420 zł' }
        ]
    },
    {
        id: 5,
        type: 'city',
        category: 'MIEJSKI',
        name: 'Rower miejski',
        description:
            'Wygodny wybór na spokojne przejażdżki po Latoszynie-Zdroju.',
        prices: [
            { label: '2 godziny', price: '30 zł' },
            { label: '4 godziny', price: '45 zł' },
            { label: 'Cały dzień', price: '70 zł' },
            { label: 'Weekend', price: '160 zł' }
        ]
    },
    {
        id: 6,
        type: 'scooter',
        category: 'HULAJNOGA',
        name: 'Hulajnoga elektryczna',
        description:
            'Wygodna opcja na krótsze przejazdy po najbliższej okolicy.',
        prices: [
            { label: '1 godzina', price: '25 zł' },
            { label: '2 godziny', price: '40 zł' },
            { label: '4 godziny', price: '65 zł' },
            { label: 'Cały dzień', price: '100 zł' }
        ]
    }
]

const filters: { label: string; value: PricingType }[] = [
    { label: 'Wszystkie', value: 'all' },
    { label: 'Gravel', value: 'gravel' },
    { label: 'MTB', value: 'mtb' },
    { label: 'E-bike', value: 'ebike' },
    { label: 'E-MTB', value: 'emtb' },
    { label: 'Miejskie', value: 'city' },
    { label: 'Hulajnogi', value: 'scooter' }
]

function PricingPage() {
    const [filter, setFilter] = useState<PricingType>('all')

    const filteredPricing =
        filter === 'all'
            ? pricing
            : pricing.filter((item) => item.type === filter)

    return (
        <main className="pricing-page">

            <section className="pricing-hero">
                <div className="pricing-hero-content">

                    <p className="pricing-label">
                        CENNIK
                    </p>

                    <h1>
                        Proste zasady.
                        <br />
                        Jasne ceny.
                    </h1>

                    <p>
                        Wybierz sprzęt i czas wypożyczenia.
                        W razie pytań o dostępność skontaktuj się z nami.
                    </p>

                </div>
            </section>

            <section className="pricing-section">

                <div
                    className="pricing-filters"
                    aria-label="Filtrowanie cennika"
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

                <div className="pricing-cards">

                    {filteredPricing.map((item) => (
                        <article
                            className="pricing-premium-card"
                            key={item.id}
                        >
                            <div className="pricing-card-header">

                                <p>{item.category}</p>

                                <h2>{item.name}</h2>

                                <span>
                                    {item.description}
                                </span>

                            </div>

                            <div className="pricing-table">

                                {item.prices.map((price) => (
                                    <div
                                        className="pricing-row"
                                        key={price.label}
                                    >
                                        <span>{price.label}</span>
                                        <strong>{price.price}</strong>
                                    </div>
                                ))}

                            </div>

                            <Link
                                to="/kontakt"
                                className="pricing-contact-button"
                            >
                                Zapytaj o dostępność
                            </Link>

                        </article>
                    ))}

                </div>

            </section>

        </main>
    )
}

export default PricingPage