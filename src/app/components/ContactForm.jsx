'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setStatus('Sending…');

        try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setStatus('Message sent. I’ll be in touch soon.');
            setForm({ name: '', email: '', message: ''});
        } else {
            setStatus('Failed to send. Please try again.');
        }
        } catch {
        setStatus('Network error. Please try again.');
        } finally {
        setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-grid">
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            />
        </div>

        <div className="form-footer">
            <button type="submit" className="submit-button" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
            </button>
            <p className="form-status" role="status" aria-live="polite">
            {status}
            </p>
        </div>
        </form>
    );
}