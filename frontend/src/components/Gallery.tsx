const images = [
    {
        src: '/gallery/latoszyn-1.jpg',
        alt: 'Latoszyn-Zdrój'
    },
    {
        src: '/gallery/rowery-1.jpg',
        alt: 'Rowery w Latoszynie-Zdroju'
    },
    {
        src: '/gallery/trasa-1.jpg',
        alt: 'Trasa rowerowa'
    },
    {
        src: '/gallery/latoszyn-2.jpg',
        alt: 'Okolice Latoszyna-Zdroju'
    },
    {
        src: '/gallery/rowery-2.jpg',
        alt: 'Wycieczka rowerowa'
    },
    {
        src: '/gallery/trasa-2.jpg',
        alt: 'Trasy w okolicy Latoszyna'
    }
]

function Gallery() {
    return (
        <section id="galeria" className="gallery-section">

            <div className="gallery-heading">
                <p className="gallery-label">GALERIA</p>

                <h2>
                    Latoszyn-Zdrój
                    <br />
                    na dwóch kołach
                </h2>

                <p>
                    Zobacz nasze rowery, malownicze trasy
                    i miejsca, które warto odkryć podczas wycieczki.
                </p>
            </div>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        className={`gallery-item gallery-item-${index + 1}`}
                        key={image.src}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Gallery