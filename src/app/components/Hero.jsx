import Link from 'next/link'

export default function Hero() {
    return (
        <section className="hero-section">
        <div className="hero-container">
            <div className="hero-content">
            <h1 className="hero-title header">Built to be Bold</h1>

            <div className="hero-description text-body">
                <p>Blue Ink Studio is an independent design and development studio built with purpose.</p>
                <p>From portfolio sites to brand identities, each digital space is crafted to feel intentional, striking, and bold.</p>
            </div>

            {/* Hero - CTA */}
            <div className="hero-cta">
                <Link href="/portfolio" className="hero-btn-cta" aria-label="View My Work">
                <span className="btn-text">View My Work</span>
                <svg className="hero-btn-cta-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
}