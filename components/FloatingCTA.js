'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="tel:+12638814191"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 200,
        background: 'var(--orange)',
        color: '#fff',
        borderRadius: '50px',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 700,
        boxShadow: '0 8px 30px rgba(249,115,22,0.5)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.2s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      className="btn-pulse"
      onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-dark)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
      </svg>
      Call Now
    </a>
  )
}
