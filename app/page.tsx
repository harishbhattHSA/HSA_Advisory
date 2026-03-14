import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WaveDivider } from "@/components/wave-divider"
import { Industries } from "@/components/industries"
import { WhyUs } from "@/components/why-us"
import { HowWeWork } from "@/components/how-we-work"
import { CtaBand } from "@/components/cta-band"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WaveDivider />
      <Services />
      <Industries />
      <WhyUs />
      <HowWeWork />
      <CtaBand />
      <Contact />
      <Footer />
    </main>
  )
}
