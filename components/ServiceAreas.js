'use client'
import { useEffect, useRef } from 'react'

const areas = [
  'Laval', 'Montreal', 'Longueuil', 'Laval-des-Rapides', 'Chomedey',
  'Sainte-Dorothée', 'Fabreville', 'Duvernay', 'Vimont', 'Pont-Viau',
  'Rosemont', 'Plateau-Mont-Royal', 'Ville-Marie', 'Verdun', 'Saint-Laurent',
]

export default function ServiceAreas() {
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
    <section style={{ padding: '100px 0', background: 'var(--black)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="area-grid">
          <div>
            <div className="orange-line" />
            <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Coverage</p>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(34px, 5vw, 52px)', color: '#111', lineHeight: 1.05, marginBottom: '20px' }}>
              Where We Operate
            </h2>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              We dispatch technicians across Laval and Montreal and the surrounding boroughs, 24 hours a day. Not sure if we cover your area? Call us — we'll tell you straight away and give you an accurate ETA.
            </p>
            <a href="tel:+12638814191" className="btn-pulse" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--orange)', color: '#fff',
              padding: '14px 28px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '14px', fontWeight: 700,
            }}>
              Check My Location
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {areas.map(area => (
              <span key={area} className="stagger-item" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'var(--dark)', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '100px', padding: '8px 16px',
                color: '#333', fontSize: '13px', fontWeight: 500,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .area-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
