'use client'
import { useEffect, useRef } from 'react'

export default function FaqSection({
  eyebrow = 'Questions',
  title = 'Frequently Asked Questions',
  subtitle = "Can't find what you're looking for? Give us a call — we're up 24/7.",
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
      <div ref={ref} className="section-fade" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>{eyebrow}</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(34px, 5vw, 52px)', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
            {title}
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map(item => (
            <details key={item.q} className="stagger-item faq-item" style={{
              background: 'var(--black)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '8px',
              padding: '18px 22px',
            }}>
              <summary style={{
                cursor: 'pointer', color: '#111', fontSize: '15px', fontWeight: 600,
                listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
              }}>
                {item.q}
                <svg className="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transition: 'transform 0.25s ease' }}>
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </summary>
              <p style={{ color: '#666', fontSize: '13.5px', lineHeight: 1.75, marginTop: '14px' }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-chevron { transform: rotate(180deg); }
      `}</style>
    </section>
  )
}
