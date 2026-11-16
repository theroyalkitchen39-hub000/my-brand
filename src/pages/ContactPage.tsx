import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND_CONFIG, CONTACT_FAQS } from '../data/brand';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Campus Catering');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [openFaqId, setOpenFaqId] = useState<string>(CONTACT_FAQS[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Please enter your name (at least 2 characters).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please write a short message (at least 10 characters).');
      return;
    }

    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setTopic('Campus Catering');
    setMessage('');
    setSubmitted(false);
    setError('');
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[var(--fo-charcoal)] text-[var(--fo-cream)] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-mono-tabular text-xs font-bold uppercase tracking-widest text-[var(--fo-lime)]">
            Hit Up the Kitchen
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-balance">
            Contact, Hours & FAQs
          </h1>
          <p className="text-base text-[var(--fo-cream)]/75 max-w-2xl leading-relaxed">
            Planning a university event, asking about Halal certifications, or dropping feedback after a midnight burger run? Let’s talk.
          </p>
        </div>
      </section>

      {/* Contact Form + Business Info Split */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Demo Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[var(--fo-charcoal)]/15 space-y-6">
            <div className="space-y-1.5">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                Send a Message
              </h2>
              <p className="text-sm text-[var(--fo-text-muted)]">
                Demo contact form preview — validates inputs locally without sending data to an external server.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="p-6 rounded-xl bg-[var(--fo-lime)]/30 border border-[var(--fo-charcoal)]/20 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[var(--fo-charcoal)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold">
                      Message Preview Recorded
                    </h3>
                    <p className="text-sm text-[var(--fo-charcoal)]/85">
                      Thanks, <strong>{name}</strong>. Your demo inquiry regarding{' '}
                      <strong>{topic}</strong> has been validated locally. For live kitchen inquiries, call{' '}
                      <span className="font-mono-tabular font-semibold">{BRAND_CONFIG.phone}</span>.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2.5 min-h-[40px] rounded-lg bg-[var(--fo-charcoal)] text-[var(--fo-cream)] text-xs font-bold cursor-pointer"
                >
                  Send Another Demo Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {error && (
                  <p
                    role="alert"
                    className="p-3.5 rounded-lg bg-[var(--fo-orange)]/15 border border-[var(--fo-orange)] text-sm font-semibold text-[var(--fo-charcoal)]"
                  >
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[var(--fo-charcoal)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ayesha Khan"
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl border border-[var(--fo-charcoal)]/20 bg-[var(--fo-cream-soft)] text-sm focus:border-[var(--fo-orange)] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[var(--fo-charcoal)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@university.edu.pk"
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl border border-[var(--fo-charcoal)]/20 bg-[var(--fo-cream-soft)] text-sm focus:border-[var(--fo-orange)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-topic"
                    className="block text-sm font-semibold text-[var(--fo-charcoal)]"
                  >
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-xl border border-[var(--fo-charcoal)]/20 bg-[var(--fo-cream-soft)] text-sm focus:border-[var(--fo-orange)] focus:outline-none"
                  >
                    <option value="Campus Catering">Campus Event & Society Boxes</option>
                    <option value="Menu & Allergens">Menu & Allergen Question</option>
                    <option value="Kitchen Feedback">Kitchen Feedback</option>
                    <option value="Careers">Join the Kitchen Crew</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[var(--fo-charcoal)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you're planning or craving..."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--fo-charcoal)]/20 bg-[var(--fo-cream-soft)] text-sm focus:border-[var(--fo-orange)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 min-h-[46px] rounded-xl bg-[var(--fo-orange)] text-[var(--fo-charcoal)] font-bold text-sm hover:bg-[var(--fo-orange-hover)] transition-colors cursor-pointer"
                >
                  Submit Demo Message
                </button>
              </form>
            )}
          </div>

          {/* Business Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[var(--fo-charcoal)] text-[var(--fo-cream)] space-y-6">
              <h2 className="font-display text-2xl font-bold">
                Flagship Kitchen Info
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--fo-orange)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Flagship Counter</p>
                    <p className="text-[var(--fo-cream)]/75">{BRAND_CONFIG.flagshipAddress}</p>
                    <p className="text-xs text-[var(--fo-lime)] mt-1">{BRAND_CONFIG.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[var(--fo-orange)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Opening Schedule</p>
                    <p className="text-[var(--fo-cream)]/75">{BRAND_CONFIG.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--fo-orange)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Hotline</p>
                    <p className="font-mono-tabular text-[var(--fo-cream)]/85">{BRAND_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--fo-orange)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Direct Email</p>
                    <p className="text-[var(--fo-cream)]/85">{BRAND_CONFIG.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/15 space-y-3">
                <p className="font-mono-tabular text-xs uppercase text-[var(--fo-lime)]">
                  Social Channels
                </p>
                <div className="flex flex-col gap-2">
                  {BRAND_CONFIG.socials.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--fo-charcoal-elevated)] hover:bg-[var(--fo-orange)] hover:text-[var(--fo-charcoal)] transition-colors text-sm font-semibold"
                    >
                      <span>
                        {soc.label} · {soc.handle}
                      </span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="bg-[var(--fo-surface-muted)] border-t border-[var(--fo-charcoal)]/12 py-16 sm:py-24"
      >
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <p className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[var(--fo-orange)]">
              Quick Answers
            </p>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {CONTACT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[var(--fo-charcoal)]/12 overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display text-lg font-bold text-[var(--fo-charcoal)] hover:text-[var(--fo-orange)] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[var(--fo-orange)]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-[var(--fo-text-muted)] leading-relaxed border-t border-[var(--fo-charcoal)]/10 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
