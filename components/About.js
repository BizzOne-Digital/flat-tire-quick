'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>, text: 'No tow truck required — we fix it on the spot' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>, text: 'We come to your exact location — day or night' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>, text: 'Serving all of Laval & Montreal, 24/7' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>, text: 'Affordable pricing — call for a quick quote' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>, text: 'Special discounts for multiple tire services' },
  ]

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--black)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="about-grid">

          {/* Image side */}
          <div className="fade-in-up" style={{ position: 'relative' }}>
            <div className="img-zoom-wrap" style={{ position: 'relative', borderRadius: '8px', aspectRatio: '4/5' }}>
              <Image
                src="/aboyt.png"
                alt="Mobile tire service technician"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, transparent 60%)' }} />
            </div>

            {/* Floating badge */}
            <div className="float-anim" style={{
              position: 'absolute',
              bottom: '-24px',
              right: '-24px',
              background: 'var(--orange)',
              borderRadius: '8px',
              padding: '28px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(249,115,22,0.4)',
            }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '52px', color: '#fff', lineHeight: 1 }}>24/7</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Always On</div>
            </div>

            {/* Orange accent border */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '-12px',
              right: '12px',
              bottom: '12px',
              border: '2px solid rgba(249,115,22,0.3)',
              borderRadius: '10px',
              zIndex: -1,
            }} />
          </div>

          {/* Text side */}
          <div ref={ref} className="section-fade">
            <div className="orange-line" />
            <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Who We Are</p>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(38px, 6vw, 64px)', color: '#111', lineHeight: 1.05, marginBottom: '24px' }}>
              Fast. Reliable.<br />
              <span style={{ color: 'var(--orange)' }}>We Come to You.</span>
            </h2>

            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              Flat Tire Quick Services is Laval and Montreal's trusted mobile tire and roadside assistance provider. We built this service for drivers who don't have time to wait — and can't afford to be stuck.
            </p>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '36px' }}>
              Whether you're in a parking lot, on the highway, at home, or outside the office — we dispatch immediately and come directly to you. No tow trucks. No hassle. Just fast, professional service.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {features.map((f, i) => (
                <div key={i} className="stagger-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--orange)', flexShrink: 0 }}>{f.icon}</div>
                  <span style={{ color: '#333', fontSize: '14px' }}>{f.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { label: 'Service Cities', value: '2+' },
                { label: 'Avg. Arrival', value: '~30min' },
                { label: 'Hours', value: '24/7' },
              ].map(s => (
                <div key={s.label} className="stagger-item" style={{ borderLeft: '3px solid var(--orange)', paddingLeft: '16px' }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', color: '#111', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: '#777', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  )
}
