import Link from 'next/link';

export default function ServicesGrid() {
    return (
        <section className="services-section">
        <div className="services-container">
            {/* Services Title */}
            <span className="section-label">SERVICES</span>

            {/* Services Content */}
            <h2 className="section-title">What I Offer</h2>
            <p className="services-intro">Flexible, focused, and designed to suit your project.</p>

            {/* Services Grid */}
            <div className="services-grid">
            <div className="service-item">
                <span className="service-number">01</span>
                <h3 className="service-title">Website Design & Development</h3>
                <p>
                Modern, responsive websites using Next.js and Sanity CMS.
                Built with performance, structure, and visual clarity in mind.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number">02</span>
                <h3 className="service-title">Visual Branding & Direction</h3>
                <p>
                Brand identity guidance including logo refinement, colour palettes,
                font pairings, layout systems, and moodboards.
                </p>
            </div>

            <div className="service-item">
                <span className="service-number">03</span>
                <h3 className="service-title">Copywriting & Taglines</h3>
                <p>
                Short-form website copy, mission statements, taglines,
                and tone of voice refinement to support your brand message.
                </p>
            </div>
            </div>

            {/* Services - CTA */}
            <div className="services-cta">
            <Link href="/services" className="services-button">View Services & Packages</Link>
            </div>
        </div>
        </section>
    );
}