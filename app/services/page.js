import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
import HowItWorks from '../../components/HowItWorks'
import ServiceAreas from '../../components/ServiceAreas'
import BookAppointment from '../../components/BookAppointment'
import FaqSection from '../../components/FaqSection'
import Footer from '../../components/Footer'
import FloatingCTA from '../../components/FloatingCTA'

export const metadata = {
  title: 'Our Services | Flat Tire Quick Services – Laval & Montreal',
  description: '24/7 mobile tire repair, tire change, battery boost, bumper repair, and emergency roadside assistance in Laval & Montreal. We come directly to your location.',
}

const steps = [
  { title: 'Call or Text Us', desc: 'Share your location and the issue — flat, dead battery, or out of gas.' },
  { title: 'Get an Instant Quote', desc: 'We give you a clear, upfront price before we dispatch anyone.' },
  { title: 'Technician Arrives', desc: 'Average arrival time is 30 minutes, anywhere in Laval or Montreal.' },
  { title: 'You\'re Back Moving', desc: 'Job done on the spot. Pay only for what was completed — no surprises.' },
]

const faqs = [
  { q: 'How fast can you get to me?', a: 'Our average response time is around 30 minutes across Laval and Montreal, depending on traffic and your exact location. We\'ll always give you an honest ETA on the call.' },
  { q: 'Do I need to move my car?', a: 'No. We come directly to wherever you are — a parking lot, the highway shoulder, your driveway, or outside the office.' },
  { q: 'What payment methods do you accept?', a: 'We accept credit/debit cards and e-transfer on-site. Payment is only collected once the job is complete.' },
  { q: 'Can you install a new tire if mine can\'t be repaired?', a: 'Yes. If a puncture is beyond a safe repair, we can source and install a matching replacement tire or fit your spare on the spot.' },
  { q: 'What if my battery is completely dead?', a: 'We carry jump-start equipment for a quick boost, and if the battery needs replacing entirely, we can install a new one that matches your make and model.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar solid />
      <div style={{ paddingTop: '90px' }}>
        <Services />
        <HowItWorks
          eyebrow="Getting Help"
          title="How It Works"
          subtitle="Simple, fast, and transparent — from your first call to the job being done."
          steps={steps}
          bg="var(--black)"
        />
        <ServiceAreas />
        <BookAppointment />
        <FaqSection
          eyebrow="Services FAQ"
          title="Common Questions"
          items={faqs}
          bg="var(--dark)"
        />
      </div>
      <Footer />
      <FloatingCTA />
    </>
  )
}
