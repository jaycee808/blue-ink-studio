import ContactForm from '../components/ContactForm';
import Link from 'next/link';

export const metadata = { title: 'Contact — Blue Ink Studio' };

export default function Contact() {
    return (
        <section className="contact-page-section">
        <div className="contact-page-container">
            <span className="contact-page-label">Contact</span>

            <div className="contact-layout">
            {/* Left Column — Content */}
            <div className="contact-left">
                <h1 className="contact-page-title">Let’s Connect</h1>

                <p className="contact-intro">
                Tell me about your project, your brand, and your goals. I design and build modern, minimal, bold websites rooted in Swiss graphic design and built with clean code.
                </p>

                {/* <div className="contact-meta">
                <div className="meta-block">
                    <h2 className="contact-page-header">Project Types</h2>
                    <ul className="meta-list">
                        <li>Custom websites (Next.js / React)</li>
                        <li>E‑commerce (Snipcart)</li>
                        <li>Brand systems & typography</li>
                        <li>Performance & UX refactors</li>
                    </ul>
                </div>

                <div className="meta-block">
                    <h2 className="contact-page-header">Direct</h2>
                    <p className="meta-text">
                    Prefer email? <a className="contact-link" href="mailto:hello@blueink.studio">hello@blueink.studio</a>
                    <br />
                    Typical response: within 1–2 business days.
                    </p>
                </div>
                </div> */}
            </div>

            {/* Right Column — Contact Form */}
            <aside className="contact-right">
                <div className="contact-form-wrap">
                <ContactForm />
                </div>
            </aside>
            </div>
        </div>
        </section>
    );
}