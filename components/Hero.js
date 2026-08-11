'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', overflow: 'hidden', background: '#090909' }}>
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(9,9,9,0.6) 0%, rgba(9,9,9,0.88) 75%, rgba(9,9,9,0.96) 100%)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', background: 'linear-gradient(to top, #090909, transparent)' }} />
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
        {/* Top line */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '18px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF6A00', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
          <span style={{ color: '#FF6A00', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>24/7 Mobile Tire &amp; Roadside Rescue</span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(46px, 8.5vw, 88px)',
            lineHeight: 1.03,
            marginBottom: '18px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          <span style={{ display: 'block', color: '#FFFFFF' }}>FLAT TIRE?</span>
          <span style={{ display: 'block', color: '#FF6A00' }}>NEED A NEW TIRE?</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          color: '#FFFFFF',
          fontSize: 'clamp(18px, 2.6vw, 26px)',
          fontWeight: 700,
          letterSpacing: '0.5px',
          marginBottom: '22px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.3s',
        }}>
          WE COME TO YOU FAST.
        </p>

        {/* Services */}
        <p style={{
          color: '#FFFFFF',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.3px',
          marginBottom: '10px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.35s',
        }}>
          Flat Tire Repair &bull; Tire Replacement &bull; New Tire Installation
        </p>

        {/* Service locations */}
        <p style={{
          color: '#CFCFCF',
          fontSize: '14px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '10px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.4s',
        }}>
          Home &bull; Office &bull; Parking Lot &bull; Roadside &bull; Highway
        </p>

        {/* Trust line */}
        <p style={{
          color: '#FFFFFF',
          fontSize: '14px',
          marginBottom: '18px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.45s',
        }}>
          Fast Response &bull; Quality Tires &bull; Professional Service
        </p>

        {/* Location line */}
        <p style={{
          color: '#FF6A00',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '32px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.5s',
        }}>
          Laval &amp; Montreal &bull; Available 24/7
        </p>

        {/* CALL NOW button */}
        <a
          href="tel:+12638814191"
          className="btn-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#FF6A00',
            color: '#fff',
            padding: '20px 48px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 800,
            letterSpacing: '1px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.55s, background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e05f00'}
          onMouseLeave={e => e.currentTarget.style.background = '#FF6A00'}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
          </svg>
          CALL NOW
        </a>

        {/* Phone number, large and highly visible */}
        <a
          href="tel:+12638814191"
          style={{
            display: 'block',
            color: '#FFFFFF',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(24px, 4vw, 34px)',
            letterSpacing: '1px',
            textDecoration: 'none',
            marginTop: '18px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.6s',
          }}
        >
          +1 263-881-4191
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: 0.5 }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #FF6A00, transparent)', animation: 'pulse 2s infinite' }} />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </div>
    </section>
  )
}
