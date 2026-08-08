'use client'
import { useEffect, useRef } from 'react'

export default function HowItWorks({
  eyebrow = 'The Process',
  title = 'How It Works',
  subtitle = 'From your call to back on the road — here\'s what happens.',
  steps,
  bg = 'var(--black)',
}) {
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
    <section style={{ padding: '100px 0', background: bg }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>{eyebrow}</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(38px, 6vw, 64px)', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
            {title}
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: '24px' }} className="how-grid">
          {steps.map((s, i) => (
            <div key={s.title} className="stagger-item" style={{ position: 'relative', textAlign: 'center', padding: '32px 20px' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--orange)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px',
                boxShadow: '0 10px 30px rgba(249,115,22,0.3)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ color: '#111', fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#666', fontSize: '13.5px', lineHeight: 1.7 }}>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="how-connector" style={{
                  position: 'absolute', top: '48px', left: '100%', width: '24px',
                  borderTop: '2px dashed rgba(249,115,22,0.35)',
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
          .how-connector { display: none !important; }
        }
      `}</style>
    </section>
  )
}
