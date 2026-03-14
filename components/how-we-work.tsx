import { Search, Stethoscope, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understand the Business",
    description: "We begin by deeply understanding your business, goals, challenges, and the context in which you operate.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Diagnose Challenges",
    description: "Through careful analysis, we identify pain points, gaps, and opportunities that require attention.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Build Actionable Solutions",
    description: "We craft practical, tailored solutions that align with your business realities and strategic goals.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Support Execution",
    description: "We stay engaged throughout implementation, ensuring solutions translate into real results.",
  },
]

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#c9a45c]" />
            <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">Our Process</span>
            <span className="w-10 h-px bg-[#c9a45c]" />
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-white text-balance">
            How We Work
          </h2>
          <p className="mt-5 text-lg text-white/70">
            A structured, transparent approach that delivers consistent results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-[#c9a45c]/60 to-[#c9a45c]/20" />
              )}
              
              <div className="text-center">
                {/* Icon Circle with Number */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="h-8 w-8 text-[#c9a45c]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#c9a45c] text-[#0f2744] text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
