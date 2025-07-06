import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="contact-section">
        <div className="contact-container">
            <h2 className="section-title">Ready to bring your ideas to life?</h2>
            <Link href="/contact">Let's talk</Link>
        </div>
        </section>
    );
}