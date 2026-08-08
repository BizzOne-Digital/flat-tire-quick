'use client'
import { useEffect, useRef } from 'react'

export default function ValuesGrid({
  eyebrow = 'What Drives Us',
  title = 'Our Values',
  subtitle,
  items,
  bg = 'var(--dark)',
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
          {subtitle && <p style={{ color: '#666', fontSize: '15px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {items.map(item => (
            <div key={item.title} className="service-card stagger-item" style={{
              background: 'var(--black)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '8px',
              padding: '32px 26px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}>
              <div className="icon-bounce" style={{ color: 'var(--orange)', marginBottom: '18px' }}>{item.icon}</div>
              <h3 style={{ color: '#111', fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '13.5px', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
