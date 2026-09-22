import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope
} from 'react-icons/fa'

import './Contact.css'

function Contact() {
    return (
        <main className="contact-page">

            <section className="contact-hero">
                <div className="contact-hero-content">

                    <p className="contact-label">
                        KONTAKT
                    </p>

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

                    <p className="contact-label">
                        NAPISZ DO NAS
                    </p>

                    <h2>
                        Jesteśmy tutaj,
                        żeby pomóc
                    </h2>

                    <p className="contact-description">
                        Wypożyczamy rowery w Latoszynie-Zdroju
                        i okolicach. Skontaktuj się z nami,
                        a ustalimy szczegóły wypożyczenia.
                    </p>

                    <div className="contact-details">

                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <strong>Lokalizacja</strong>
                                <span>Latoszyn-Zdrój i okolice</span>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <FaPhone />
                            </div>

                            <div>
                                <strong>Telefon</strong>

                                <a href="tel:+48791020803">
                                    +48 791 020 803
                                </a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="contact-detail-icon">
                                <FaEnvelope />
                            </div>

                            <div>
                                <strong>E-mail</strong>

                                <a href="mailto:rowery.latoszynzdroj@gmail.com">
                                    rowery.latoszynzdroj@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="contact-form-wrapper">

                    <p className="contact-form-label">
                        FORMULARZ
                    </p>

                    <h2>
                        Wyślij zapytanie
                    </h2>

                    <p className="contact-form-description">
                        Napisz, jaki rower Cię interesuje i kiedy
                        planujesz wycieczkę.
                    </p>

                    <form className="contact-form">

                        <label>
                            <span>Imię i nazwisko</span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Jan Kowalski"
                                autoComplete="name"
                                required
                            />
                        </label>

                        <label>
                            <span>E-mail</span>

                            <input
                                type="email"
                                name="email"
                                placeholder="jan@przyklad.pl"
                                autoComplete="email"
                                required
                            />
                        </label>

                        <label>
                            <span>Wiadomość</span>

                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Np. interesuje mnie E-bike na sobotę..."
                                required
                            />
                        </label>

                        <button type="submit">
                            Wyślij wiadomość
                        </button>

                    </form>

                    <p className="contact-form-note">
                        Odpowiemy najszybciej, jak to możliwe.
                    </p>

                </div>

            </section>

            <section
                className="contact-map-section"
                aria-label="Lokalizacja wypożyczalni"
            >
                <div className="contact-map-heading">
                    <p className="contact-label">
                        LOKALIZACJA
                    </p>

                    <h2>
                        Znajdziesz nas w Latoszynie-Zdroju
                    </h2>
                </div>

                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps?q=Latoszyn-Zdrój&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokalizacja Rowery Latoszyn Zdrój"
                    />
                </div>
            </section>

        </main>
    )
}

export default Contact