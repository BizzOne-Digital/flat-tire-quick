'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    title: 'Flat Tire Repair',
    desc: 'Fast on-site puncture repair so you\'re back on the road in minutes. We patch and seal — no tow truck needed.',
    price: 'From $80',
    image: '/new/img1.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Tire Change & Installation',
    desc: 'Full tire swap at your location. Bring your spare or we source the right fit on the spot.',
    price: 'From $80',
    image: '/new/img2.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="12" rx="2"/><polygon points="16,10 22,6 22,18 16,14"/>
      </svg>
    ),
    title: 'Battery Boost / Jump Start',
    desc: 'Dead battery blocking your day? We jump-start your vehicle quickly — no wait, no hassle.',
    price: 'From $60',
    image: '/new/img3.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="18" height="11" rx="2"/><line x1="20" y1="11" x2="22" y2="11"/><line x1="20" y1="13" x2="22" y2="13"/>
        <rect x="6" y="4" width="3" height="3" rx="1"/><rect x="15" y="4" width="3" height="3" rx="1"/>
      </svg>
    ),
    title: 'New Battery Installation',
    desc: 'We source and install the right battery for your make and model right where you are.',
    price: 'Price on model',
    image: '/new/img4.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22V11L12 2l9 9v11"/><rect x="9" y="15" width="6" height="7"/>
        <path d="M12 12v3"/><circle cx="12" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Emergency Gas Delivery',
    desc: 'Ran out of fuel? We bring enough gas to get you to the nearest station safely.',
    price: 'From $60',
    image: '/new/img5.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: 'On-Site Vehicle Assistance',
    desc: 'Flat tire, battery, or fuel issue — we come to your exact location and fix it on the spot. (No towing services.)',
    price: 'Quote on location',
    image: '/new/img6.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h2l2-5h10l2 5h2"/><rect x="3" y="12" width="18" height="5" rx="1"/>
      </svg>
    ),
    title: 'Bumper Repair & Fixing',
    desc: 'Loose or fallen bumper? We reattach and secure it on-site, safely and reliably.',
    price: 'Quote on location',
    image: '/new/img7.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="23"/>
      </svg>
    ),
    title: 'Spare Tire Installation',
    desc: 'Flat tire but no time to source a new one? We remove the damaged wheel and mount your vehicle\'s own spare on the spot — quick, safe, and gets you moving again.',
    price: 'From $60',
    image: '/new/img8-9.webp',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"/>
      </svg>
    ),
    title: 'Seasonal Tire Change (On Rims)',
    desc: 'Switching between winter and summer tires that are already mounted on rims? We swap them on-site, correctly torqued — no shop visit needed.',
    price: 'From $70',
    image: '/new/img8-9.webp',
  },
]

export default function Services() {
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
    <section id="services" style={{ padding: '100px 0', background: 'var(--dark)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="orange-line" />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>What We Do</p>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(42px, 7vw, 72px)', color: '#111', lineHeight: 1, marginBottom: '16px' }}>
                Our Services
              </h2>
              <p style={{ color: '#666', fontSize: '15px', maxWidth: '500px', lineHeight: 1.7 }}>
                Flat tire, battery & fuel assistance — we come to your exact location anywhere in Laval and Montreal. No towing services.
              </p>
            </div>
            <a href="tel:+12638814191" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--orange)', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
              border: '1px solid var(--orange)', borderRadius: '4px', padding: '12px 24px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--orange)' }}
            >
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="service-card stagger-item"
              style={{
                background: 'var(--black)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Image */}
              <div className="img-zoom-wrap" style={{ position: 'relative', height: '340px' }}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)' }} />
                <div style={{
                  position: 'absolute', top: '14px', right: '14px',
                  background: 'var(--orange)', color: '#fff',
                  padding: '4px 12px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 700,
                }}>
                  {svc.price}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div className="icon-bounce" style={{ color: 'var(--orange)', marginBottom: '14px' }}>{svc.icon}</div>
                <h3 style={{ color: '#111', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{svc.title}</h3>
                <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.7, marginBottom: '14px' }}>{svc.desc}</p>
                <a
                  href="#book"
                  style={{ color: 'var(--orange)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
