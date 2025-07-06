export default function Hero() {
    return (
        <section className="hero-section">
        <div className="hero-container">
            {/* Left Column */}
            <div className="hero-left">
            <div className="tagline-block">
                <p className="tagline">Inked with Intent</p>
                <p className="tag-subtext">Independent design & development studio</p>
            </div>
            <div className="feature-block">
                <p className="feature-label">Featured Work</p>
                <p className="feature-title">Atlas →</p>
            </div>
            </div>

            {/* Right Column */}
            <div className="hero-right">
            <h1 className="hero-title">Digital Design<br />With Purpose</h1>
            <div className="hero-description">
                <p>Blue Ink Studio is an independent design and development studio built with purpose.</p>
                <p>From portfolio sites to brand identities, each digital space is crafted to feel intentional, striking, and bold.</p>
            </div>

            <div className="scroll-cue">
                <span>↓</span> Explore more
            </div>
            </div>
        </div>
        </section>
    );
}
