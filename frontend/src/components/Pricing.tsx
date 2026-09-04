function Pricing() {
    return (
        <section id="cennik" className="pricing">
            <p>Cennik</p>

            <h2>Proste i przejrzyste ceny</h2>

            <div className="pricing-grid">

                <article className="pricing-card">
                    <h3>Gravel</h3>

                    <div>
                        <span>4 godziny</span>
                        <strong>60 zł</strong>
                    </div>

                    <div>
                        <span>1 dzień</span>
                        <strong>90 zł</strong>
                    </div>

                    <div>
                        <span>Weekend</span>
                        <strong>240 zł</strong>
                    </div>

                    <a href="#kontakt">Zapytaj o dostępność</a>
                </article>

                <article className="pricing-card">
                    <h3>E-bike</h3>

                    <div>
                        <span>4 godziny</span>
                        <strong>100 zł</strong>
                    </div>

                    <div>
                        <span>1 dzień</span>
                        <strong>180 zł</strong>
                    </div>

                    <div>
                        <span>Weekend</span>
                        <strong>450 zł</strong>
                    </div>

                    <a href="#kontakt">Zapytaj o dostępność</a>
                </article>

                <article className="pricing-card">
                    <h3>E-MTB</h3>

                    <div>
                        <span>4 godziny</span>
                        <strong>120 zł</strong>
                    </div>

                    <div>
                        <span>1 dzień</span>
                        <strong>220 zł</strong>
                    </div>

                    <div>
                        <span>Weekend</span>
                        <strong>550 zł</strong>
                    </div>

                    <a href="#kontakt">Zapytaj o dostępność</a>
                </article>

            </div>
        </section>
    )
}

export default Pricing