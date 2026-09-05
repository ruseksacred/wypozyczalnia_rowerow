import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const routes = [
    {
        id: 1,
        name: 'Pętla Latoszyn-Zdrój',
        type: 'TRASA REKREACYJNA',
        distance: '18 km',
        time: '1 h 20 min',
        difficulty: 'Łatwa',
        elevation: '↑ 250 m',
        bike: 'Gravel / E-bike',
        image: '/routes/latoszyn-petla.jpg',
        slug: 'petla-latoszyn',
        gpx: '/gpx/latoszyn-petla.gpx',
        description:
            'Spokojna trasa prowadząca przez okolice Latoszyna-Zdroju, lokalne drogi i tereny zielone.'
    },
    {
        id: 2,
        name: 'Leśna Pętla',
        type: 'TRASA TERENOWA',
        distance: '26 km',
        time: '2 h',
        difficulty: 'Średnia',
        elevation: '↑ 420 m',
        bike: 'MTB / E-MTB',
        image: '/routes/lesna-petla.jpg',
        slug: 'lesna-petla',
        gpx: '/gpx/lesna-petla.gpx',
        description:
            'Trasa dla osób, które lubią leśne drogi, szutry i bardziej wymagający teren.'
    },
    {
        id: 3,
        name: 'Widokowa Trasa',
        type: 'TRASA WIDOKOWA',
        distance: '34 km',
        time: '2 h 30 min',
        difficulty: 'Średnia',
        elevation: '↑ 560 m',
        bike: 'Gravel / E-bike',
        image: '/routes/widokowa-trasa.jpg',
        slug: 'widokowa-trasa',
        gpx: '/gpx/widokowa-trasa.gpx',
        description:
            'Dłuższa wycieczka przez malownicze okolice z punktami widokowymi i spokojnymi drogami.'
    },
    {
        id: 4,
        name: 'Dębicka Pętla',
        type: 'TRASA GRAVELOWA',
        distance: '42 km',
        time: '3 h',
        difficulty: 'Średnia',
        elevation: '↑ 620 m',
        bike: 'Gravel / E-bike',
        image: '/routes/debicka-petla.jpg',
        slug: 'debicka-petla',
        gpx: '/gpx/debicka-petla.gpx',
        description:
            'Dłuższa trasa prowadząca przez Latoszyn, okolice Dębicy i spokojne lokalne drogi.'
    }
]

function RoutesPage() {
    return (
        <main className="routes-page">

            <section className="routes-hero">
                <div className="routes-hero-content">
                    <p className="routes-label">
                        TRASY ROWEROWE
                    </p>

                    <h1>
                        Odkrywaj okolice
                        <br />
                        na dwóch kołach
                    </h1>

                    <p>
                        Przygotowaliśmy propozycje tras rowerowych
                        w Latoszynie-Zdroju i okolicach.
                        Wybierz trasę dopasowaną do swoich możliwości
                        i rodzaju roweru.
                    </p>
                </div>
            </section>

            <section className="routes-slider-section">

                <div className="routes-slider-heading">
                    <div>
                        <p className="routes-label">
                            POLECANE TRASY
                        </p>

                        <h2>
                            Wybierz swoją trasę
                        </h2>
                    </div>
                </div>

                <div className="routes-slider-wrapper">

                    <button
                        className="routes-arrow routes-arrow-prev"
                        aria-label="Poprzednia trasa"
                    >
                        ‹
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.routes-arrow-prev',
                            nextEl: '.routes-arrow-next'
                        }}
                        slidesPerView={1}
                        spaceBetween={40}
                        className="routes-swiper"
                    >
                        {routes.map((route) => (
                            <SwiperSlide key={route.id}>

                                <article className="route-featured-card">

                                    <div className="route-featured-image">
                                        <img
                                            src={route.image}
                                            alt={route.name}
                                        />
                                    </div>

                                    <div className="route-featured-content">

                                        <p className="route-type">
                                            {route.type}
                                        </p>

                                        <h2>{route.name}</h2>

                                        <div className="route-stats">
                                            <span>{route.distance}</span>
                                            <span>{route.time}</span>
                                            <span>{route.difficulty}</span>
                                            <span>{route.elevation}</span>
                                        </div>

                                        <p className="route-description">
                                            {route.description}
                                        </p>

                                        <p className="route-bike">
                                            Polecany rower:
                                            <strong> {route.bike}</strong>
                                        </p>

                                        <div className="route-actions">
                                            <Link
                                                to={`/trasy/${route.slug}`}
                                                className="route-details-button"
                                            >
                                                Zobacz trasę
                                            </Link>

                                            <a
                                                href={route.gpx}
                                                download
                                                className="route-gpx-button"
                                            >
                                                ↓ Pobierz GPX
                                            </a>
                                        </div>

                                    </div>

                                </article>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        className="routes-arrow routes-arrow-next"
                        aria-label="Następna trasa"
                    >
                        ›
                    </button>

                </div>

            </section>

        </main>
    )
}

export default RoutesPage