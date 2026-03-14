import Image from "next/image"
import { 
  Briefcase, 
  PieChart, 
  ShieldCheck, 
  Building2, 
  Settings, 
  TrendingUp,
  FileText,
  Calculator
} from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Strategic guidance for key business decisions, expansion planning, and operational improvements.",
  },
  {
    icon: PieChart,
    title: "Financial Planning & Analysis",
    description: "Comprehensive financial analysis, budgeting support, and performance tracking frameworks.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory Support",
    description: "Navigate regulatory requirements with confidence. Stay compliant with evolving business laws.",
  },
  {
    icon: Building2,
    title: "Startup & SME Advisory",
    description: "Tailored advisory for early-stage and growing businesses—from structuring to scaling.",
  },
  {
    icon: Settings,
    title: "Process Improvement",
    description: "Identify inefficiencies and implement streamlined processes for better productivity.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion Strategy",
    description: "Market entry, diversification, and expansion strategies backed by practical insights.",
  },
  {
    icon: FileText,
    title: "Management Reporting Support",
    description: "Clear, actionable MIS and dashboards for informed decision-making at every level.",
  },
  {
    icon: Calculator,
    title: "Virtual CFO / Finance Support",
    description: "Outsourced financial leadership for businesses that need CFO-level expertise without full-time costs.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-[#0b1e36] via-[#0f2a47] to-[#122f4f] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hsacaservices.png"
          alt="HSACA Services Background"
          fill
          className="object-contain object-center opacity-25"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#c9a45c]" />
            <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">Our Services</span>
            <span className="w-10 h-px bg-[#c9a45c]" />
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-white text-balance">
            Comprehensive Advisory Solutions
          </h2>
          <p className="mt-5 text-lg text-white/70">
            From strategic planning to operational excellence, we provide the guidance your business needs to thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[color:var(--card)] p-7 rounded-xl border border-white/10 hover:border-[#c9a45c]/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Gold accent line on top */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#c9a45c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-[#1a3a5c] text-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#1a3a5c] transition-all duration-300 shadow-sm">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
