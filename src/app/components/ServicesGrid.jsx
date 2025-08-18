import Link from 'next/link';

export default function ServicesGrid() {
    return (
        <section className="services-section">
        <div className="services-container">
            {/* Label */}
            <span className="section-label">SERVICES</span>

            {/* Header & Intro */}
            <h2 className="section-title">Design. Code. Intent.</h2>
            <p className="services-intro">Web design, development, and visual identity for bold brands and creative thinkers. From visuals to functionality, each project is tailored to suit your needs.</p>

            {/* Services Grid */}
            <div className="services-grid">
            <div className="service-item">
                <span className="service-number">01</span>
                <h3 className="service-title">Brand &amp; Portfolio Sites</h3>
                <p>
                Bespoke websites for creatives, freelancers, and small businesses. Built to showcase your work, share your story, and grow your presence online. Designed to feel intentional, engaging, and uniquely you.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number">02</span>
                <h3 className="service-title">Design‑Driven Development</h3>
                <p>
                Clean, responsive front-end builds using Next.js and modern development tools. Structured layouts, and expressive visuals that bring your site to life.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number">03</span>
                <h3 className="service-title">Creative Direction &amp; Identity</h3>
                <p>
                Support across the visual storytelling process. From moodboards and layout strategy to font pairing, colour systems, and visual hierarchy. Designed to create a cohesive brand identity that feels distinctive and aligned with your vision.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number">04</span>
                <h3 className="service-title">Copywriting &amp; Voice</h3>
                <p>
                Words that work with your visuals. Clear, confident copy for websites, taglines, and messaging. I’ll help your brand speak with purpose and personality.
                </p>
            </div>
            </div>
            <Link href="/services" className="services-button">View Services &amp; Packages</Link>
            </div>
        </section>
    );
}