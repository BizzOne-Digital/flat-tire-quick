'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar({ solid = false }) {
  const [scrolledState, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = solid || scrolledState

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Pricing', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, padding 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249,115,22,0.15)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/" className="logo-spin" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Flat Tire Quick Services" width={160} height={46} style={{ height: '38px', width: 'auto', borderRadius: '4px' }} priority />
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {links.map(link => (
            <li key={link}>
              <a
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="nav-link"
                style={{ color: scrolled ? '#444' : '#eee', textDecoration: 'none', fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = scrolled ? '#111' : '#fff'}
                onMouseLeave={e => e.target.style.color = scrolled ? '#444' : '#eee'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="tel:+12638814191"
            className="btn-pulse call-now-desktop"
            style={{
              background: 'var(--orange)',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-dark)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
            </svg>
            Call Now
          </a>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: scrolled ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', padding: '8px', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#111' : '#fff'} strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"/><line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.98)',
          padding: '20px 24px',
          borderTop: '1px solid rgba(249,115,22,0.2)',
        }}>
          {links.map(link => (
            <a
              key={link}
              href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: '#444', textDecoration: 'none', padding: '12px 0', fontSize: '15px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+12638814191"
            className="btn-pulse"
            style={{
              background: 'var(--orange)',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
            </svg>
            Call Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .call-now-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
