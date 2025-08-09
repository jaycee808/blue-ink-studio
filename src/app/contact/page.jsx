import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section className="contact-page-section">
            <div className="contact-page-container">
                <span className="contact-page-label">Contact</span>
                <h1 className="contact-page-title">Let's Connect</h1>
                <ContactForm />
            </div>
        </section>
    );
}