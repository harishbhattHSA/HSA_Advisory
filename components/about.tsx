import Image from "next/image"
import { Compass, LineChart, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description: "Clear direction for business decisions",
  },
  {
    icon: LineChart,
    title: "Financial & Compliance Guidance",
    description: "Structured financial discipline and regulatory confidence",
  },
  {
    icon: Rocket,
    title: "Business Growth Support",
    description: "Scalable solutions for sustainable expansion",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/abouthsaca.png"
          alt="About HSACA Background"
          fill
          className="object-cover object-center opacity-30"
        />
      </div>
      {/* Subtle Blue Tone Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a3a5c]/5 to-transparent pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-[#c9a45c]" />
                <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">About HSACA</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-[#1a3a5c] leading-tight text-balance">
                Your Reliable Advisory Partner for Structured Growth
              </h2>
            </div>
            <div className="space-y-5 text-[#1a3a5c]/70 leading-relaxed text-lg">
              <p>
                HSACA Business Advisory Pvt. Ltd. is a professional advisory firm committed to helping businesses navigate complexity with confidence. We partner with promoters, entrepreneurs, and leadership teams to bring clarity to financial decisions, streamline operations, and build sustainable growth pathways.
              </p>
              <p>
                Our approach is grounded in practical, business-focused advice. We understand the challenges faced by growing businesses in India—from compliance requirements to strategic pivots—and we provide the structured guidance needed to move forward decisively.
              </p>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-6 p-7 bg-[#fafaf8]/90 backdrop-blur-sm rounded-xl border border-[#1a3a5c]/8 hover:border-[#c9a45c]/40 hover:shadow-lg transition-all duration-300"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#c9a45c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-[#1a3a5c] text-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#1a3a5c] transition-all duration-300 shadow-sm">
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3a5c] mb-2">{item.title}</h3>
                  <p className="text-[#1a3a5c]/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
