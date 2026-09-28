import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import FloatingCTA from '../../components/FloatingCTA'

export const metadata = {
  title: 'Contact Us | Flat Tire Quick Services – Laval & Montreal',
  description: 'Contact Flat Tire Quick Services for 24/7 mobile tire repair and on-site vehicle service in Laval & Montreal. Call now for a fast dispatch. No towing services.',
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
