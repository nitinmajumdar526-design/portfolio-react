import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      // Firebase Firestore mein save karo
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Firebase error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <p className="section-label">04. contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="divider" />

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            Have a project in mind? Looking for a developer to join your team?
            I'm always open to discussing new opportunities.
          </p>
          {[
            { icon: '📧', label: 'Email', val: 'yourname@email.com' },
            { icon: '💼', label: 'LinkedIn', val: '/in/yourname' },
            { icon: '🐙', label: 'GitHub', val: '@yourname' },
            { icon: '📍', label: 'Location', val: 'Your City, Country' },
          ].map(item => (
            <div key={item.label} className="contact-item">
              <span className="contact-item-icon">{item.icon}</span>
              <div>
                <p className="contact-item-label">{item.label}</p>
                <p className="contact-item-val">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card contact-form-card">
          {status === 'success' ? (
            <div className="form-success">
              <span className="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button className="btn btn-outline" onClick={() => setStatus(null)}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name" name="name" type="text" placeholder="John Doe"
                    value={form.name} onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email" name="email" type="email" placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-subject">Subject</label>
                <input
                  id="c-subject" name="subject" type="text" placeholder="Project Discussion"
                  value={form.subject} onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message" name="message" rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              {status === 'error' && (
                <p className="form-error global-error">
                  Kuch problem aayi. Dobara try karo.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><span className="spinner" /> Sending...</>
                ) : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;