import { Check } from "lucide-react"

const differentiators = [
  {
    title: "Practical & Business-Focused",
    description: "Advice grounded in real-world business realities, not just theory.",
  },
  {
    title: "Structured Approach",
    description: "Clear methodologies that bring order to complex challenges.",
  },
  {
    title: "Financial Clarity",
    description: "Deep understanding of numbers to support confident decision-making.",
  },
  {
    title: "Client-Centric Engagement",
    description: "Your priorities drive our approach. We listen, understand, and act.",
  },
  {
    title: "Long-Term Partnership",
    description: "We build lasting relationships, not transactional engagements.",
  },
  {
    title: "Professional & Confidential",
    description: "Your business information is handled with utmost discretion.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-[#c9a45c]" />
                <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">Why Choose HSACA</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-[#1a3a5c] leading-tight text-balance">
                A Partner You Can Trust
              </h2>
            </div>
            <p className="text-lg text-[#1a3a5c]/60 leading-relaxed">
              We understand that choosing an advisory partner is a significant decision. Here&apos;s what sets HSACA apart and why businesses trust us with their growth journey.
            </p>
          </div>

          {/* Right - Differentiators Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-[#1a3a5c]/8 hover:border-[#c9a45c]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-[#1a3a5c] text-[#c9a45c]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a3a5c] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#1a3a5c]/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
