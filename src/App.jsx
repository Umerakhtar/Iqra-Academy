import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import MeetQari from './components/MeetQari'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#eef4f1] text-[#0c3d3d]">
      <Navbar />
      <Hero />
      <Courses />
      <MeetQari />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <a
        href="https://wa.me/923450501993"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Iqra Academy on WhatsApp"
        className="whatsapp-float fixed bottom-6 right-6 z-[100] flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#0c3d3d]/25 transition hover:scale-110 hover:bg-[#1fbd5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0c3d3d]"
      >
        <MessageCircle size={28} strokeWidth={2.5} aria-hidden="true" />
      </a>
    </div>
  )
}

export default App
