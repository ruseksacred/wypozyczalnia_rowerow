import './About.css'

function About() {
    return (
        <section id="o-nas" className="about">
            <div className="about-content">

                <p className="about-label">
                    O NAS
                </p>

                <h2>
                    Rowerem poznasz okolicę
                    <br />
                    zupełnie inaczej
                </h2>

                <div className="about-text">
                    <p>
                        Tworzymy lokalną wypożyczalnię rowerów
                        w Latoszynie-Zdroju, która pozwala odkrywać
                        okolicę aktywnie i na własnych zasadach.
                    </p>

                    <p>
                        W naszej ofercie znajdziesz rowery gravel,
                        MTB, elektryczne oraz miejskie. Dzięki temu
                        możesz dobrać sprzęt do spokojnej wycieczki,
                        dłuższej trasy lub jazdy w terenie.
                    </p>

                    <p>
                        Chcemy, żeby wypożyczenie roweru było proste:
                        wybierasz sprzęt, kontaktujesz się z nami
                        i ruszasz w trasę.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About