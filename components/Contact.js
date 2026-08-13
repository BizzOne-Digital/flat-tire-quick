'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* light-theme section */}
      {/* BG image with heavy overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=1600&auto=format&fit=crop&q=60"
          alt="Night highway"
          fill
          style={{ objectFit: 'cover', opacity: 0.05 }}
        />
      </div>

      <div ref={ref} className="section-fade" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Get In Touch</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(38px, 6vw, 64px)', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
            Stuck Somewhere?<br /><span style={{ color: 'var(--orange)' }}>Call Us Now.</span>
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}>
            We're available 24 hours a day, 7 days a week across Laval and Montreal. One call is all it takes.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {[
            {
              icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/></svg>,
              label: 'Phone',
              value: '+1 263-881-4191',
              href: 'tel:+12638814191',
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: 'Email',
              value: 'basitkamal1993@gmail.com',
              href: 'mailto:basitkamal1993@gmail.com',
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              label: 'Service Area',
              value: 'Laval & Montreal, QC',
              href: null,
            },
            {
              icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
              label: 'Hours',
              value: 'Open 24/7 — Always',
              href: null,
            },
          ].map(card => (
            <div
              key={card.label}
              className="stagger-item"
              style={{
                background: 'var(--black)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '8px',
                padding: '28px',
                textAlign: 'center',
                transition: 'border-color 0.3s, transform 0.3s',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ color: 'var(--orange)', marginBottom: '14px', display: 'flex', justifyContent: 'center' }}>{card.icon}</div>
              <div style={{ color: '#888', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{card.label}</div>
              {card.href ? (
                <a href={card.href} style={{ color: '#111', fontSize: '14px', fontWeight: 600, textDecoration: 'none', wordBreak: 'break-all' }}
                  onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                  onMouseLeave={e => e.target.style.color = '#111'}
                >{card.value}</a>
              ) : (
                <div style={{ color: '#111', fontSize: '14px', fontWeight: 600 }}>{card.value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="tel:+12638814191"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              background: 'var(--green)',
              color: '#fff',
              padding: '26px 56px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 800,
              letterSpacing: '0.5px',
              boxShadow: '0 15px 40px rgba(22,163,74,0.35)',
            }}
            className="btn-pulse-green"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
            </svg>
            CALL NOW
          </a>
          <div style={{ marginTop: '20px' }}>
            <a href="tel:+12638814191" style={{ color: '#111', textDecoration: 'none', fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4.5vw, 40px)', letterSpacing: '1px' }}>
              +1 263-881-4191
            </a>
          </div>
          <div style={{ color: '#777', fontSize: '13px', marginTop: '12px' }}>Available 24 hours · 7 days · Laval & Montreal</div>

          {/* Facebook link */}
          <div style={{ marginTop: '24px' }}>
            <a
              href="https://www.facebook.com/share/1CrUmjwRRy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#777', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1877F2'}
              onMouseLeave={e => e.currentTarget.style.color = '#777'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
