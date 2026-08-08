import Navbar from '../../components/Navbar'
import About from '../../components/About'
import ValuesGrid from '../../components/ValuesGrid'
import HowItWorks from '../../components/HowItWorks'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import FloatingCTA from '../../components/FloatingCTA'

export const metadata = {
  title: 'About Us | Flat Tire Quick Services – Laval & Montreal',
  description: "Learn about Flat Tire Quick Services, Laval and Montreal's trusted 24/7 mobile tire and roadside assistance provider.",
}

const values = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    title: 'Speed',
    desc: 'Average dispatch under 30 minutes. We know every minute stuck roadside feels longer than it is.',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/></svg>,
    title: 'Reliability',
    desc: 'Available 24/7, 365 days a year — including holidays, storms, and the middle of the night.',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Honest Pricing',
    desc: 'Upfront quotes before we start. No hidden fees, no surprise charges when we arrive.',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'Customer First',
    desc: "We treat every call like it's an emergency — because for the person stuck on the road, it is.",
  },
]

const steps = [
  { title: 'You Call or Text', desc: 'Tell us your location and what happened. Takes less than a minute.' },
  { title: 'We Dispatch', desc: 'A technician is sent to your exact location — no need to move your car.' },
  { title: 'We Fix It On-Site', desc: 'Tire repaired, battery boosted, or gas delivered — right where you are.' },
  { title: 'Back On The Road', desc: 'You get a clear receipt and you\'re back to your day, fast.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar solid />
      <div style={{ paddingTop: '90px' }}>
        <About />
        <ValuesGrid
          eyebrow="What Drives Us"
          title="Our Values"
          subtitle="The principles behind every call we take and every job we do."
          items={values}
          bg="var(--dark)"
        />
        <HowItWorks
          eyebrow="The Process"
          title="How It Works"
          subtitle="From your call to back on the road — here's what happens, every time."
          steps={steps}
          bg="var(--black)"
        />
        <Contact />
      </div>
      <Footer />
      <FloatingCTA />
    </>
  )
}
