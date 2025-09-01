import ContactForm from '../components/ContactForm';
import Link from 'next/link';

export const metadata = { title: 'Contact — Blue Ink Studio' };

export default function Contact() {
    return (
        <section className="contact-page-section">
        <div className="contact-page-container">
            <span className="contact-page-label text-label">Contact</span>

            <div className="contact-layout">
            {/* Left Column — Content */}
            <div className="contact-left">
                <h1 className="contact-page-title subheader">Let’s Connect</h1>

                <p className="contact-intro text-body">
                Tell me about your project, your brand, and your goals. I design and build modern, minimal, bold websites rooted in Swiss graphic design and built with clean code.
                </p>
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