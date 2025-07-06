export default function ServicesGrid() {
    return (
        <section className="services-section">
        <div className="services-container">
            <h2 className="section-title">What I Offer</h2>
            <p className="services-intro">Flexible, focused, and designed to suit your project.</p>

            <div className="services-grid">
            <div className="service-item">
                <h3 className="service-title">Website Design & Development</h3>
                <p>
                Modern, responsive websites using Next.js and Sanity CMS. Built with performance, structure, and visual clarity in mind.
                </p>
            </div>

            <div className="service-item">
                <h3 className="service-title">Visual Branding & Direction</h3>
                <p>
                Brand identity guidance including logo refinement, colour palettes, font pairings, layout systems, and moodboards.
                </p>
            </div>

            <div className="service-item">
                <h3 className="service-title">Copywriting & Taglines</h3>
                <p>
                Short-form website copy, mission statements, taglines, and tone of voice refinement to support your brand message.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}
