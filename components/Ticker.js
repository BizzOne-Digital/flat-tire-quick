export default function Ticker() {
  const items = [
    'Flat Tire Repair',
    'Tire Change & Installation',
    'Battery Boost',
    'New Battery Installation',
    'Emergency Gas Delivery',
    'Mobile Roadside Assistance',
    'Available 24/7',
    'Laval & Montreal',
  ]

  const doubled = [...items, ...items]

  return (
    <div style={{ background: 'var(--orange)', padding: '14px 0', overflow: 'hidden' }}>
      <div className="ticker-wrap">
        <div className="ticker-content">
          {doubled.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', marginRight: '48px' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginRight: '14px', flexShrink: 0 }}>
                <polygon points="5,0 10,10 0,10" fill="#fff" opacity="0.8"/>
              </svg>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
