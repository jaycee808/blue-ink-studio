import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="contact-section">
        <div className="contact-container">
            <span className="section-label">CONTACT</span>
            <h2 className="section-title-contact">Ready to bring your ideas to life?</h2>
            <Link href="/contact" className="contact-button">Let's Talk</Link>
        </div>
        </section>
    );
}