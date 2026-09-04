function Offer() {
    return (
        <section id="oferta" className="offer">
            <p>Nasza oferta</p>

            <h2>Wybierz rower dla siebie</h2>

            <div className="offer-grid">
                <article className="offer-card">
                    <h3>Gravel</h3>
                    <p>
                        Lekki i szybki rower na asfalt, szutry
                        i dłuższe wycieczki.
                    </p>
                    <a href="#kontakt">Zapytaj o rower</a>
                </article>

                <article className="offer-card">
                    <h3>E-bike</h3>
                    <p>
                        Wygodny rower ze wspomaganiem elektrycznym
                        na dłuższe trasy i podjazdy.
                    </p>
                    <a href="#kontakt">Zapytaj o rower</a>
                </article>

                <article className="offer-card">
                    <h3>E-MTB</h3>
                    <p>
                        Elektryczny rower górski dla osób,
                        które chcą ruszyć w teren.
                    </p>
                    <a href="#kontakt">Zapytaj o rower</a>
                </article>
            </div>
        </section>
    )
}

export default Offer