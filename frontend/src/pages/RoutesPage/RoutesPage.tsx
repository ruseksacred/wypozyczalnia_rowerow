import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoutesPage.css'

type Route = {
    id: number
    name: string
    type: string
    distance: string
    time: string
    difficulty: string
    elevation: string
    bike: string
    image: string
    slug: string
    gpx: string
    description: string
}

const routes: Route[] = [
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
        name: 'Leśna trasa MTB',
        type: 'TRASA TERENOWA',
        distance: '24 km',
        time: '2 h',
        difficulty: 'Średnia',
        elevation: '↑ 430 m',
        bike: 'MTB / E-MTB',
        image: '/routes/trasa-mtb.jpg',
        slug: 'lesna-trasa-mtb',
        gpx: '/gpx/lesna-trasa-mtb.gpx',
        description:
            'Trasa dla osób, które chcą zjechać z asfaltu i odkrywać okoliczne lasy oraz terenowe drogi.'
    },
    {
        id: 3,
        name: 'Gravelowa okolica',
        type: 'TRASA GRAVELOWA',
        distance: '36 km',
        time: '2 h 30 min',
        difficulty: 'Średnia',
        elevation: '↑ 520 m',
        bike: 'Gravel / E-bike',
        image: '/routes/trasa-gravel.jpg',
        slug: 'gravelowa-okolica',
        gpx: '/gpx/gravelowa-okolica.gpx',
        description:
            'Dłuższa propozycja łącząca lokalne drogi, asfalt i szutrowe odcinki w okolicy Latoszyna.'
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
                        Gotowe pomysły
                        <br />
                        na wycieczkę
                    </h1>

                    <p className="routes-intro">
                        Wybierz trasę dopasowaną do swojego roweru
                        i możliwości. Pobierz plik GPX i ruszaj
                        odkrywać okolice Latoszyna-Zdroju.
                    </p>

                </div>
            </section>

            <section className="routes-content">

                <div className="routes-section-heading">

                    <div>
                        <p className="routes-label">
                            POLECANE TRASY
                        </p>

                        <h2>
                            Wybierz kierunek
                        </h2>
                    </div>

                    <p>
                        Od spokojnej przejażdżki po bardziej wymagającą
                        trasę terenową.
                    </p>

                </div>

                <div className="routes-slider-wrapper">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{
                            clickable: true
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="routes-swiper"
                    >

                        {routes.map((route) => (
                            <SwiperSlide key={route.id}>

                                <article className="route-card">

                                    <div className="route-card-image">
                                        <img
                                            src={route.image}
                                            alt={route.name}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="route-card-content">

                                        <p className="route-type">
                                            {route.type}
                                        </p>

                                        <h2>
                                            {route.name}
                                        </h2>

                                        <p className="route-description">
                                            {route.description}
                                        </p>

                                        <div className="route-stats">

                                            <div>
                                                <span>Dystans</span>
                                                <strong>
                                                    {route.distance}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Czas</span>
                                                <strong>
                                                    {route.time}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Trudność</span>
                                                <strong>
                                                    {route.difficulty}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Przewyższenie</span>
                                                <strong>
                                                    {route.elevation}
                                                </strong>
                                            </div>

                                        </div>

                                        <div className="route-bottom">

                                            <div className="route-bike">
                                                <span>
                                                    Polecany rower
                                                </span>

                                                <strong>
                                                    {route.bike}
                                                </strong>
                                            </div>

                                            <div className="route-actions">

                                                <a
                                                    href={`/trasy/${route.slug}`}
                                                    className="route-more-link"
                                                >
                                                    Zobacz więcej →
                                                </a>

                                                <a
                                                    href={route.gpx}
                                                    download
                                                    className="route-gpx-button"
                                                >
                                                    Pobierz GPX
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </article>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </section>

        </main>
    )
}

export default RoutesPage