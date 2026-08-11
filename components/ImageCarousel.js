'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/img4.png', alt: 'Mobile tire service at your location' },
  { src: '/img5.png', alt: 'Technician repairing a flat tire' },
  { src: '/img7.png', alt: 'Fast roadside assistance' },
]

export default function ImageCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ padding: '90px 0', background: 'var(--black)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="orange-line" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--orange)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>See Us In Action</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(34px, 5vw, 52px)', color: '#111', lineHeight: 1.05 }}>
            On The Job, 24/7
          </h2>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.12)' }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: active === i ? 1 : 0,
                transform: active === i ? 'scale(1)' : 'scale(1.04)',
                transition: 'opacity 0.9s ease, transform 1.2s ease',
              }}
            >
              <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 5 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: active === i ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '100px',
                  border: 'none',
                  background: active === i ? 'var(--orange)' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
