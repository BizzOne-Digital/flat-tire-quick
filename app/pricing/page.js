import Navbar from '../../components/Navbar'
import Pricing from '../../components/Pricing'
import ValuesGrid from '../../components/ValuesGrid'
import FaqSection from '../../components/FaqSection'
import Footer from '../../components/Footer'
import FloatingCTA from '../../components/FloatingCTA'

export const metadata = {
  title: 'Pricing | Flat Tire Quick Services – Laval & Montreal',
  description: 'Simple, honest, affordable pricing for mobile tire repair, tire change, battery boost, and roadside assistance in Laval & Montreal.',
}

const included = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
    title: 'Upfront Quote',
    desc: 'You know the price before we dispatch a technician — no surprises when we arrive.',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V11L12 2l9 9v11"/><rect x="9" y="15" width="6" height="7"/></svg>,
    title: 'On-Site Travel Included',
    desc: "Our travel to your location anywhere in Laval or Montreal is built into the quoted price.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/></svg>,
    title: 'No Emergency Surcharge',
    desc: 'Same pricing day or night, weekday or weekend — including holidays.',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    title: 'Pay Only When Done',
    desc: 'Card, debit, or e-transfer — collected only once the job is completed to your satisfaction.',
  },
]

const faqs = [
  { q: 'Are these prices final, or can they change on-site?', a: 'The prices listed are starting rates. Your exact quote is confirmed on the phone before dispatch based on your vehicle and situation, so there are no surprises when the technician arrives.' },
  { q: 'Is there an extra charge for nights, weekends, or holidays?', a: 'No. We charge the same rate 24/7, including nights, weekends, and holidays.' },
  { q: 'Do you charge a call-out or travel fee?', a: 'Travel within our Laval and Montreal service area is included in the quoted price for the service.' },
  { q: 'What if the tire can\'t be repaired?', a: 'We\'ll let you know on the spot and quote a fair price for a tire change or replacement before doing any work.' },
  { q: 'Do you offer discounts for multiple services?', a: 'Yes — if you need more than one service at the same visit (for example a tire change and a battery boost), ask us about a combined discount when you call.' },
]

export default function PricingPage() {
  return (
    <>
      <Navbar solid />
      <div style={{ paddingTop: '90px' }}>
        <Pricing />
        <ValuesGrid
          eyebrow="No Surprises"
          title="What's Included"
          subtitle="Every quote we give you is built on the same simple promise."
          items={included}
          bg="var(--dark)"
        />
        <FaqSection
          eyebrow="Pricing FAQ"
          title="Questions About Pricing"
          items={faqs}
          bg="var(--black)"
        />
      </div>
      <Footer />
      <FloatingCTA />
    </>
  )
}
