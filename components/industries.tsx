import { 
  Rocket, 
  Building, 
  Users, 
  Briefcase, 
  Factory, 
  Laptop
} from "lucide-react"

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Early-stage ventures seeking structure and strategic direction",
  },
  {
    icon: Building,
    title: "SMEs",
    description: "Growing businesses navigating scale and complexity",
  },
  {
    icon: Users,
    title: "Family Businesses",
    description: "Multi-generational enterprises balancing tradition and growth",
  },
  {
    icon: Briefcase,
    title: "Professional Firms",
    description: "Service providers optimizing operations and compliance",
  },
  {
    icon: Factory,
    title: "Trading & Manufacturing",
    description: "Production and distribution businesses improving efficiency",
  },
  {
    icon: Laptop,
    title: "Service Companies",
    description: "Modern service enterprises scaling sustainably",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#c9a45c]" />
            <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">Who We Serve</span>
            <span className="w-10 h-px bg-[#c9a45c]" />
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-white text-balance">
            Industries & Clients
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We work across diverse sectors, bringing tailored solutions to businesses at every stage of growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-6 bg-[color:var(--card)] rounded-xl border border-white/10 hover:border-[#c9a45c]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#1a3a5c] text-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#1a3a5c] transition-all duration-300 shadow-sm">
                <industry.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{industry.title}</h3>
                <p className="text-sm text-white/70">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
