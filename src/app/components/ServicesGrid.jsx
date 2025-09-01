import Link from 'next/link';

export default function ServicesGrid() {
    return (
        <section className="services-section">
        <div className="services-container">
            {/* Label */}
            <span className="section-label text-label">SERVICES</span>

            {/* Header & Intro */}
            <h2 className="section-title subheader">What I Offer</h2>
            <p className="services-intro text-body">I design, develop, and create visual identities for bold brands and creative thinkers. From visuals to functionality, each project is tailored to suit your needs.</p>

            {/* Services Grid */}
            <div className="services-grid">
            <div className="service-item">
                <span className="service-number text-label">01</span>
                <h3 className="service-title section-heading">Brand &amp; Portfolio Sites</h3>
                <p className="text-body">
                Bespoke websites for creatives, freelancers, and small businesses. Built to showcase your work, share your story, and grow your presence online. Designed to feel intentional, engaging, and uniquely you.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number text-label">02</span>
                <h3 className="service-title section-heading">Design‑Driven Development</h3>
                <p className="text-body">
                Clean, responsive front-end builds using Next.js and modern development tools. Structured layouts, and expressive visuals that bring your site to life.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number text-label">03</span>
                <h3 className="service-title section-heading">Creative Direction &amp; Identity</h3>
                <p className="text-body">
                Support across the visual storytelling process. From moodboards and layout strategy to font pairing, colour systems, and visual hierarchy. Designed to create a cohesive brand identity that feels distinctive and aligned with your vision.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number text-label">04</span>
                <h3 className="service-title section-heading">Copywriting &amp; Voice</h3>
                <p className="text-body">
                Words that work with your visuals. Clear, confident copy for websites, taglines, and messaging. I’ll help your brand speak with purpose and personality.
                </p>
            </div>
            </div>

            {/* Services Hero - CTA */}
            <div className="services-cta">
                <Link href="/services" className="services-btn-cta" aria-label="View Services and Packages">
                <span className="btn-text">View Services &amp; Packages</span>
                <svg className="services-btn-cta-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                </Link>
            </div>
            </div>
        </section>
    );
}