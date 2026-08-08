import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import FloatingCTA from '../../components/FloatingCTA'

export const metadata = {
  title: 'Contact Us | Flat Tire Quick Services – Laval & Montreal',
  description: 'Contact Flat Tire Quick Services for 24/7 mobile tire repair and roadside assistance in Laval & Montreal. Call now for a fast dispatch.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar solid />
      <div style={{ paddingTop: '90px' }}>
        <Contact />
      </div>
      <Footer />
      <FloatingCTA />
    </>
  )
}
