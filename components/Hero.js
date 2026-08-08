'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', overflow: 'hidden', background: '#0A0A0A' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/hero.png"
          alt="Mobile tire service"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Dark overlay for text contrast */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.85) 75%, rgba(10,10,10,0.95) 100%)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
      </div>

      {/* Content — centered */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '900px',
        margin: '0 auto',
        padding: '100px 24px 100px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
          <span style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Available 24/7 — Laval &amp; Montreal</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(48px, 9vw, 96px)',
            lineHeight: 1.02,
            marginBottom: '20px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.35)' }}>ROADSIDE</span>
          <span style={{ display: 'block', color: '#fff' }}>RESCUE</span>
        </h1>

        {/* Sub */}
        <p style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '15px',
          letterSpacing: '0.5px',
          lineHeight: 1.7,
          marginBottom: '36px',
          maxWidth: '480px',
          textTransform: 'uppercase',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.35s',
        }}>
          24/7 Mobile Tire &amp; Roadside Help — We Come to You
        </p>

        {/* CTA pill */}
        <a
          href="tel:+12638814191"
          className="btn-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--orange)',
            color: '#fff',
            padding: '15px 40px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.45s, background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-dark)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
        >
          Call Now
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.5 }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--orange), transparent)', animation: 'pulse 2s infinite' }} />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </div>
    </section>
  )
}
