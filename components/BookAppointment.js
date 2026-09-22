'use client'
import { useEffect, useRef } from 'react'

// Replace with your real Google Calendar "Appointment schedule" booking-page URL.
// Get it from: Google Calendar → Settings → Create an "Appointment schedule" →
// copy the public booking page link it gives you (looks like
// https://calendar.google.com/calendar/appointments/schedules/AcZ...)
const GOOGLE_CALENDAR_BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/REPLACE_WITH_YOUR_LINK'

export default function BookAppointment() {
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
    <section id="book" style={{ padding: '100px 0', background: 'var(--dark)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Two Ways to Reach Us</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(34px, 5vw, 56px)', color: '#111', lineHeight: 1.05, marginBottom: '16px' }}>
            Emergency Now? Or Planning Ahead?
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Stuck on the road right now — call us, we dispatch immediately. Need a routine tire change or seasonal swap? Book a time that works for you below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '28px', alignItems: 'stretch' }} className="book-grid">
          {/* Priority: Call Now */}
          <div className="stagger-item" style={{
            background: 'var(--black)',
            border: '2px solid var(--green)',
            borderRadius: '12px',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)',
              borderRadius: '100px', padding: '5px 14px', marginBottom: '18px',
              color: 'var(--green)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>
              Flat Tire / Roadside Emergency
            </div>
            <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', color: '#111', marginBottom: '12px', lineHeight: 1.1 }}>
              Need Help Right Now?
            </h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px', maxWidth: '320px' }}>
              For flat tires and roadside emergencies, don't wait to book — call us and we dispatch immediately.
            </p>
            <a
              href="tel:+12638814191"
              className="btn-pulse-green"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'var(--green)', color: '#fff',
                padding: '18px 40px', borderRadius: '100px',
                textDecoration: 'none', fontSize: 'clamp(17px, 2.4vw, 21px)', fontWeight: 800,
                boxShadow: '0 12px 30px rgba(22,163,74,0.35)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--green-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l1.76-1.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z"/>
              </svg>
              CALL NOW
            </a>
            <div style={{ color: '#999', fontSize: '12px', marginTop: '14px' }}>Available 24/7 — Laval &amp; Montreal</div>
          </div>

          {/* Secondary: Book via Google Calendar */}
          <div className="stagger-item" style={{
            background: 'var(--black)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <h3 style={{ color: '#111', fontSize: '17px', fontWeight: 700, marginBottom: '2px' }}>Book a Scheduled Tire Appointment</h3>
                <p style={{ color: '#888', fontSize: '12.5px' }}>Tire changes, seasonal swaps &amp; installations — pick a day and time.</p>
              </div>
            </div>

            <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: '480px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
              <iframe
                src={GOOGLE_CALENDAR_BOOKING_URL}
                title="Book a tire appointment"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '480px' }}
                frameBorder="0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .book-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
