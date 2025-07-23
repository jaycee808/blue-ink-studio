import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section className="contact-page-section">
            <div className="contact-page-container">
                <span className="contact-page-label">Let’s Connect</span>
                <h1 className="contact-page-title">Start the Conversation</h1>
                <ContactForm />
            </div>
        </section>
    );
}