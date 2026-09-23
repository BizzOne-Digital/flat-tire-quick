'use client'
import { useEffect, useRef } from 'react'

const prices = [
  { service: 'Mobile Flat Tire Repair', price: 'From $80', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> },
  { service: 'Tire Change / Installation', price: 'From $80', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
  { service: 'Battery Boost / Jump Start', price: 'From $60', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="18" height="11" rx="2"/><line x1="20" y1="11" x2="22" y2="11"/><line x1="20" y1="13" x2="22" y2="13"/></svg> },
  { service: 'New Battery Installation', price: 'By vehicle', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="7" width="18" height="11" rx="2"/><rect x="6" y="4" width="3" height="3" rx="1"/><rect x="15" y="4" width="3" height="3" rx="1"/></svg> },
  { service: 'Emergency Gas Delivery', price: 'From $60', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 22V11L12 2l9 9v11"/><rect x="9" y="15" width="6" height="7"/></svg> },
  { service: 'Mobile Roadside Assistance', price: 'Quote on location', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { service: 'Bumper Repair & Fixing', price: 'Quote on location', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 12h2l2-5h10l2 5h2"/><rect x="3" y="12" width="18" height="5" rx="1"/></svg> },
]

export default function Pricing() {
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
    <section id="pricing" style={{ padding: '100px 0', background: 'var(--black)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Transparent Pricing</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(38px, 6vw, 64px)', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
            Simple. Honest. Affordable.
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            No hidden fees. Starting prices listed below — call us for a quick quote based on your location.
          </p>
        </div>

        {/* Prices grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', marginBottom: '48px' }}>
          {prices.map((p, i) => (
            <div
              key={p.service}
              className="stagger-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 28px',
                background: i % 2 === 0 ? 'var(--dark)' : 'var(--black)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                transition: 'background 0.2s, transform 0.2s',
                cursor: 'default',
                gap: '16px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(249,115,22,0.08)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? 'var(--dark)' : 'var(--black)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ color: 'var(--orange)', flexShrink: 0 }}>{p.icon}</div>
                <span style={{ color: '#333', fontSize: '14px', fontWeight: 500 }}>{p.service}</span>
              </div>
              <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '15px', whiteSpace: 'nowrap' }}>{p.price}</span>
            </div>
          ))}
        </div>

        {/* Offer banner */}
        <div className="stagger-item" style={{
          background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 100%)',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: '8px',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
              <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>Special Offer</span>
            </div>
            <h3 style={{ color: '#111', fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Special discounts for multiple tire services</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Affordable pricing for Laval and Montreal customers. Call us for a quick quote.</p>
          </div>
          <a
            href="tel:+12638814191"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--orange)', color: '#fff',
              padding: '14px 28px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '14px', fontWeight: 700,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
            </svg>
            Get My Quote
          </a>
        </div>
      </div>
    </section>
  )
}
