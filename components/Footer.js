'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '48px 0 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div className="logo-spin" style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Image src="/logo.png" alt="Flat Tire Quick Services" width={160} height={46} style={{ height: '36px', width: 'auto', borderRadius: '4px' }} />
            </div>
            <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.8, maxWidth: '280px' }}>
              Fast, reliable 24/7 mobile tire and roadside assistance. We come to you — home, office, parking lot, or roadside.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: '#111', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map(link => (
                <li key={link}>
                  <a href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} style={{ color: '#666', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s, transform 0.2s', display: 'inline-block' }}
                    onMouseEnter={e => { e.target.style.color = 'var(--orange)'; e.target.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { e.target.style.color = '#666'; e.target.style.transform = 'translateX(0)' }}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#111', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+12638814191" style={{ color: '#666', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/></svg>
                +1 263-881-4191
              </a>
              <a href="mailto:basitkamal1993@gmail.com" style={{ color: '#666', fontSize: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                basitkamal1993@gmail.com
              </a>
              <div style={{ color: '#666', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                Open 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#888', fontSize: '12px' }}>
            &copy; {new Date().getFullYear()} Flat Tire Quick Services. All rights reserved.
          </p>
          <p style={{ color: '#999', fontSize: '11px' }}>Serving Laval & Montreal, QC, Canada</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
