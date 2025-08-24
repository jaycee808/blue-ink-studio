export default function Hero() {
    return (
        <section className="hero-section">
        <div className="hero-container">
            <div className="hero-content">
            <h1 className="hero-title">Digital Design<br />With Purpose</h1>

            <div className="hero-description">
                <p>Blue Ink Studio is an independent design and development studio built with intent.</p>
                <p>From portfolio sites to brand identities, each digital space is crafted to feel intentional, striking, and bold.</p>
            </div>

            <div className="hero-buttons">
                <a href="/portfolio" className="hero-button-primary"><p>View My Work</p></a>
                <a href="/contact" className="hero-button-secondary"><p>Let’s Talk</p></a>
            </div>
            </div>
        </div>
        </section>
    );
}