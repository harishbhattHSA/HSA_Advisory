import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-meeting.jpg"
          alt="Business advisory meeting"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2744]/95 via-[#1a3a5c]/90 to-[#1a3a5c]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/60 via-transparent to-[#0f2744]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Small Label */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <span className="w-8 h-px bg-[#c9a45c]" />
              <span className="text-[#c9a45c]">Business Advisory Excellence</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.1] mb-6 text-balance">
            Strategic Business Advisory for Growth, Clarity, and Confidence
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mb-10">
            HSACA Business Advisory helps businesses strengthen financial clarity, improve decision-making, support compliance, and build structured pathways for sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#c9a45c] hover:bg-[#b8944d] text-[#0f2744] font-semibold px-8 py-6 text-base group"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-base backdrop-blur-sm"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
