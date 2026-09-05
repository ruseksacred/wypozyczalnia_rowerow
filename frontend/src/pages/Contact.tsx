function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div>
                    <p className="contact-label">KONTAKT</p>

                    <h1>
                        Zaplanuj swoją
                        <br />
                        rowerową wycieczkę
                    </h1>

                    <p className="contact-intro">
                        Masz pytanie dotyczące rowerów, cen lub dostępności?
                        Napisz do nas. Chętnie pomożemy wybrać odpowiedni
                        rower i termin.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="contact-info">
                    <p className="contact-label">NAPISZ DO NAS</p>

                    <h2>Jesteśmy tutaj, żeby pomóc</h2>

                    <p>
                        Wypożyczamy rowery w Latoszynie-Zdroju
                        i okolicach. Skontaktuj się z nami,
                        a ustalimy szczegóły wypożyczenia.
                    </p>

                    <div className="contact-details">
                        <div>
                            <strong>📍 Lokalizacja</strong>
                            <span>Latoszyn-Zdrój i okolice</span>
                        </div>

                        <div>
                            <strong>📞 Telefon</strong>
                            <span>+48 791 020 803</span>
                        </div>

                        <div>
                            <strong>✉️ E-mail</strong>
                            <span>rowery.latoszynzdroj@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Wyślij zapytanie</h2>

                    <form className="contact-form">
                        <label>
                            Imię i nazwisko
                            <input
                                type="text"
                                name="name"
                                placeholder="Jan Kowalski"
                                required
                            />
                        </label>

                        <label>
                            E-mail
                            <input
                                type="email"
                                name="email"
                                placeholder="jan@przyklad.pl"
                                required
                            />
                        </label>

                        <label>
                            Wiadomość
                            <textarea
                                name="message"
                                rows={6}
                                placeholder="W czym możemy Ci pomóc?"
                                required
                            ></textarea>
                        </label>

                        <button type="submit">
                            Wyślij wiadomość
                        </button>
                    </form>
                </div>
     
            </section>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps?q=Latoszyn-Zdrój&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja Rowery Latoszyn Zdrój"
                ></iframe>
            </div>
        </main>
    )
}

export default Contact