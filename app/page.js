import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import About from '../components/About'
import Pricing from '../components/Pricing'
import ImageCarousel from '../components/ImageCarousel'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Pricing />
      <ImageCarousel />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  )
}
