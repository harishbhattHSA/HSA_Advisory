"use client"

import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["123 Business Park, Tower A", "Sector 62, Gurugram", "Haryana 122001, India"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Harish.bhatt@hsacaadvisory.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 9958824865"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 2:00 PM"],
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-[#c9a45c]" />
            <span className="text-sm font-semibold text-[#c9a45c] uppercase tracking-widest">Get In Touch</span>
            <span className="w-10 h-px bg-[#c9a45c]" />
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-white text-balance">
            Contact Us
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Ready to take the next step? Reach out to us and let&apos;s start a conversation about your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-[color:var(--card)] p-8 lg:p-10 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-[color:var(--input)] border-white/15 focus:border-[#c9a45c] focus:ring-[#c9a45c]/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-[color:var(--input)] border-white/15 focus:border-[#c9a45c] focus:ring-[#c9a45c]/20" 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/70">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="bg-[color:var(--input)] border-white/15 focus:border-[#c9a45c] focus:ring-[#c9a45c]/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/70">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company" 
                    className="bg-[color:var(--input)] border-white/15 focus:border-[#c9a45c] focus:ring-[#c9a45c]/20" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-white/70">Service Needed</Label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-white/15 bg-[color:var(--input)] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c]/30 focus-visible:border-[#c9a45c]"
                >
                  <option value="">Select a service</option>
                  <option value="business-advisory">Business Advisory</option>
                  <option value="financial-planning">Financial Planning & Analysis</option>
                  <option value="compliance">Compliance & Regulatory Support</option>
                  <option value="startup-advisory">Startup & SME Advisory</option>
                  <option value="process-improvement">Process Improvement</option>
                  <option value="growth-strategy">Growth & Expansion Strategy</option>
                  <option value="management-reporting">Management Reporting Support</option>
                  <option value="virtual-cfo">Virtual CFO / Finance Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/70">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your business and how we can help..." 
                  className="bg-[color:var(--input)] border-white/15 focus:border-[#c9a45c] focus:ring-[#c9a45c]/20 min-h-[140px]" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#c9a45c] hover:bg-[#b8944d] text-[#0f2744] font-semibold py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 bg-[color:var(--card)] rounded-xl border border-white/10 hover:border-[#c9a45c]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a3a5c] text-[#c9a45c] shadow-sm">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-white/70">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
