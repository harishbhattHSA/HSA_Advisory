import Link from "next/link"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

const servicesLinks = [
  { href: "#services", label: "Business Advisory" },
  { href: "#services", label: "Financial Planning" },
  { href: "#services", label: "Compliance Support" },
  { href: "#services", label: "Startup Advisory" },
  { href: "#services", label: "Virtual CFO" },
  { href: "#services", label: "Growth Strategy" },
]

export function Footer() {
  return (
    <footer className="bg-[#0f2744]">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-5 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white">HSACA Business Advisory</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Your trusted partner for strategic business advisory, financial guidance, and compliance support. Helping businesses grow with clarity and confidence.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-8 h-px bg-[#c9a45c]" />
              <span className="text-xs text-[#c9a45c] font-medium tracking-wider">SINCE 2020</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c9a45c]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#c9a45c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c9a45c]">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#c9a45c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c9a45c]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>123 Business Park, Tower A</li>
              <li>Sector 62, Gurugram, Haryana</li>
              <li className="pt-2">contact@hsacaadvisory.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© 2026 HSACA Business Advisory Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-[#c9a45c] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#c9a45c] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
