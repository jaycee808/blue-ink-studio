import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="contact-section">
        <div className="contact-container">
            <span className="contact-section-label">CONTACT</span>
            <h2 className="section-title-contact">Ready to bring your ideas to life?</h2>


            {/* Contact Hero - CTA */}
            <div className="contact-cta">
                <Link href="/contact" className="contact-btn-cta" aria-label="Contact">
                <span>Let's Talk</span>
                <svg className="contact-btn-cta-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                </Link>
            </div>
        </div>
        </section>
    );
}