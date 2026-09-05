import { useState } from 'react'
import { Link } from 'react-router-dom'

type PricingType =
    | 'all'
    | 'gravel'
    | 'mtb'
    | 'ebike'
    | 'emtb'
    | 'city'
    | 'scooter'

type PricingItem = {
    id: number
    type: Exclude<PricingType, 'all'>
    category: string
    name: string
    description: string
    prices: {
        label: string
        price: string
    }[]
}

const pricing: PricingItem[] = [
    {
        id: 1,
        type: 'gravel',
        category: 'GRAVEL',
        name: 'Rower gravelowy',
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
            'Dla osób wybierających leśne drogi i bardziej wymagający teren.',
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
            'Komfortowe wspomaganie na dłuższe wycieczki i podjazdy.',
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
            'Mocne wspomaganie i terenowe możliwości na wymagające trasy.',
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
            'Wygodna opcja na krótkie przejazdy po okolicy.',
        prices: [
            { label: '1 godzina', price: '25 zł' },
            { label: '2 godziny', price: '40 zł' },
            { label: '4 godziny', price: '65 zł' },
            { label: 'Cały dzień', price: '100 zł' }
        ]
    }
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
                        CENNIK WYPOŻYCZALNI
                    </p>

                    <h1>
                        Wybierz sprzęt
                        <br />
                        i ruszaj w trasę
                    </h1>

                    <p>
                        Przejrzysty cennik bez ukrytych kosztów.
                        Wybierz kategorię i sprawdź dostępne opcje
                        wynajmu.
                    </p>
                </div>
            </section>

            <section className="pricing-section">

                <div className="pricing-filters">
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

                <div className="pricing-cards">
                    {filteredPricing.map((item) => (
                        <article className="pricing-premium-card" key={item.id}>

                            <div className="pricing-card-header">
                                <p>{item.category}</p>
                                <h2>{item.name}</h2>
                                <span>{item.description}</span>
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