export default function Hero() {
    return (
        <section className="hero-section">
        <div className="hero-container">
            {/* Hero Section - Left Column */}
            <div className="hero-left">
            <div className="tagline-block">
                <p className="tagline">Inked with Intent</p>
                <p className="tag-subtext">Independent design & development studio</p>
            </div>

            {/* Core Principles */}
            <div className="principles-block">
                <p className="principle"><span>01</span> Intentional</p>
                <p className="principle"><span>02</span> Bold</p>
                <p className="principle"><span>03</span> Functional</p>
            </div>
            </div>

            {/* Hero Section - Right Column */}
            <div className="hero-right">
            <h1 className="hero-title">Digital Design<br />With Purpose</h1>

            <div className="hero-description">
                <p>Blue Ink Studio is an independent design and development studio built with intent.</p>
                <p>From portfolio sites to brand identities, each digital space is crafted to feel intentional, striking, and bold.</p>
            </div>

            {/* Hero Buttons */}
            <div className="hero-buttons">
                <a href="/portfolio" className="hero-button-primary">View My Work</a>
                <a href="/contact" className="hero-button-secondary">Let’s Talk</a>
            </div>
            </div>
        </div>
        </section>
    );
}