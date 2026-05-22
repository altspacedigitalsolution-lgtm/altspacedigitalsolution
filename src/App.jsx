import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Clapperboard, Megaphone, Sparkles, CheckCircle2, Mail, Phone } from "lucide-react";

const services = [
  {
    icon: <Clapperboard className="w-6 h-6" />,
    title: "Video Editing",
    desc: "High-retention reels, ads, brand videos, motion graphics, and AI-enhanced edits for modern campaigns.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photo & Video Production",
    desc: "Creative shoots for products, food, travel, corporate, and social media content.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Social Media Management",
    desc: "Content planning, captions, posting, creative direction, and performance-focused strategy.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Marketing",
    desc: "AI avatars, automation ideas, ad concepts, chatbot flows, and smarter content systems.",
  },
];

const works = [
  {
    title: "Travel Promo Reel",
    category: "Video Editing / Ads",
    desc: "A cinematic short-form travel campaign with fast hooks, motion text, and energetic pacing.",
    visual: "SIARGAO 3D2N",
    accent: "from-cyan-400/30 via-blue-500/20 to-white/10",
  },
  {
    title: "Restaurant Digital Menu",
    category: "Design / Video Menu",
    desc: "A modern digital menu board system with food highlights, pricing, and promo-ready layouts.",
    visual: "DIGITAL MENU",
    accent: "from-orange-400/30 via-red-500/20 to-white/10",
  },
  {
    title: "BPO Brand Awareness Content",
    category: "Corporate Marketing",
    desc: "Professional content concepts for recruitment, culture, and service credibility campaigns.",
    visual: "BPO CONTENT",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-white/10",
  },
  {
    title: "AI Avatar Marketing Video",
    category: "AI Creative Production",
    desc: "Avatar-led brand introductions with natural movement, script direction, and modern presentation.",
    visual: "AI AVATAR",
    accent: "from-emerald-400/30 via-cyan-500/20 to-white/10",
  },
];

const process = ["Discover", "Plan", "Create", "Launch", "Optimize"];

const Button = ({ children, className = "", variant, ...props }) => (
  <button className={`inline-flex items-center justify-center font-semibold transition-all ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>{children}</div>
);

export default function AltspacePortfolio() {
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6d28d950,transparent_35%),radial-gradient(circle_at_top_left,#0ea5e950,transparent_35%)] pointer-events-none" />

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logoaltspace.png" alt="Altspace Digital" className="h-32 w-auto object-contain" />
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Portfolio</a>
          <a href="#graphics-funnels" className="hover:text-white">Graphics & Funnels</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <Button className="rounded-full bg-white px-5 py-2.5 text-black hover:bg-white/90">Start a Project</Button>
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Digital Marketing • Video • AI Creative
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">Creative digital solutions that make brands look premium.</h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">Altspace Digital Solution helps businesses grow through high-impact video editing, content creation, social media management, and AI-powered marketing systems.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full h-12 px-7 bg-cyan-400 text-black hover:bg-cyan-300">View Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Button>
              <Button className="rounded-full h-12 px-7 border border-white/20 bg-white/5 text-white hover:bg-white/10">Book Consultation</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
              <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-cyan-400/30 via-violet-500/30 to-white/10 p-6 flex flex-col justify-end">
                <div className="rounded-3xl bg-black/50 backdrop-blur-md border border-white/10 p-6">
                  <p className="text-sm text-white/60 mb-2">Featured Capability</p>
                  <h3 className="text-2xl font-bold">Video-first marketing built for attention.</h3>
                  <p className="text-white/60 mt-3">From concept to final export — content made to perform.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-cyan-400/25 via-violet-500/20 to-white/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center px-8">
                    <div className="w-28 h-28 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6"><Camera className="w-12 h-12 text-white/50" /></div>
                    <p className="text-white/50 text-sm mb-2">Founder Photo Placeholder</p>
                    <h3 className="text-2xl font-black">Carlwinn Pangilinan</h3>
                    <p className="text-cyan-300 mt-2">Creative Director • Video Editor • Digital Marketer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-cyan-400 font-semibold mb-3">About the founder</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Hi, I’m Carl — the creative mind behind Altspace Digital Solution.</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-5">I’m a multimedia creative and digital marketing specialist from the Philippines with strong experience in video editing, content creation, social media management, and brand-focused visual production.</p>
              <p className="text-white/70 text-lg leading-relaxed mb-7">Through Altspace Digital Solution, I help businesses create premium-looking content, stronger online presence, and modern marketing assets — from videos and graphics to funnels, campaigns, and AI-powered creative systems.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {["5+ Years Video Editing", "Social Media Management", "Photo & Video Production", "AI Creative Workflows", "Ad Creative Direction", "Funnel & Landing Page Design"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-cyan-400" /><span>{skill}</span></div>
                ))}
              </div>
              <Button className="rounded-full h-12 px-7 bg-cyan-400 text-black hover:bg-cyan-300">Let’s Build Your Brand <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-10"><p className="text-cyan-400 font-semibold mb-3">What we do</p><h2 className="text-4xl font-bold">Services designed for modern brands</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, index) => (
              <Card key={index} className="rounded-3xl bg-white/5 border border-white/10 text-white">
                <CardContent className="p-6"><div className="w-12 h-12 rounded-2xl bg-cyan-400/15 text-cyan-300 flex items-center justify-center mb-5">{item.icon}</div><h3 className="text-xl font-bold mb-3">{item.title}</h3><p className="text-white/60 leading-relaxed">{item.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="work" className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"><div><p className="text-cyan-400 font-semibold mb-3">Selected work</p><h2 className="text-4xl font-bold">Portfolio highlights</h2></div><p className="text-white/60 max-w-md">Replace these 9:16 vertical video placeholders with real reels, ads, campaign results, and client samples.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work, index) => (
              <motion.div key={index} whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden">
                <div className={`aspect-[9/16] max-h-[560px] bg-gradient-to-br ${work.accent} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/20 backdrop-blur-sm" />
                  <div className="relative text-center px-4"><Clapperboard className="w-12 h-12 text-white/50 mx-auto mb-4" /><p className="text-2xl font-black tracking-tight text-white/80">{work.visual}</p><p className="text-xs text-white/40 mt-2">9:16 video placeholder</p></div>
                </div>
                <div className="p-7"><p className="text-cyan-400 text-sm font-semibold mb-2">{work.category}</p><h3 className="text-2xl font-bold mb-3">{work.title}</h3><p className="text-white/60">{work.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="graphics-funnels" className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"><div><p className="text-cyan-400 font-semibold mb-3">Design showcase</p><h2 className="text-4xl font-bold">Graphics & Funnel Design</h2></div><p className="text-white/60 max-w-md">A dedicated space for your 4:5 graphic design subjects, landing page mockups, sales funnels, and campaign visuals.</p></div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-cyan-400/20 via-white/10 to-violet-500/20 p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full"><div className="rounded-3xl bg-black/35 border border-white/10 p-5 flex flex-col justify-between"><div className="text-xs text-cyan-300">SOCIAL POST</div><div className="text-3xl font-black leading-none">NEW<br />CAMPAIGN</div><div className="h-2 rounded-full bg-white/20" /></div><div className="rounded-3xl bg-white/10 border border-white/10 p-5 flex flex-col justify-between"><div className="text-xs text-cyan-300">POSTER</div><div className="text-2xl font-black leading-none">BRAND<br />VISUAL</div><div className="h-20 rounded-2xl bg-cyan-400/20" /></div><div className="col-span-2 rounded-3xl bg-black/35 border border-white/10 p-5 flex items-center justify-between"><div><div className="text-xs text-cyan-300">THUMBNAIL DESIGN</div><div className="text-2xl font-black">HIGH CLICK VISUAL</div></div><div className="w-20 h-20 rounded-2xl bg-white/10" /></div></div>
              </div>
              <div className="p-7"><p className="text-cyan-400 text-sm font-semibold mb-2">Posters • Branding • Social Media</p><h3 className="text-2xl font-bold mb-3">Creative Visual Design</h3><p className="text-white/60">Show your 4:5 posters, ad creatives, social media layouts, thumbnails, menu boards, and brand visuals here.</p></div>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-violet-500/25 to-cyan-400/10 p-6 flex items-center justify-center">
                <div className="w-full rounded-[1.5rem] bg-black/35 border border-white/10 p-5 space-y-4"><div className="h-4 w-24 rounded-full bg-cyan-400/40" /><div className="h-8 w-full rounded-xl bg-white/20" /><div className="h-3 w-4/5 rounded-full bg-white/10" /><div className="h-3 w-3/5 rounded-full bg-white/10" /><div className="grid grid-cols-2 gap-3 pt-3"><div className="h-20 rounded-2xl bg-white/10" /><div className="h-20 rounded-2xl bg-white/10" /></div><div className="h-11 rounded-full bg-cyan-400/70 flex items-center justify-center text-black font-bold">Book Now</div></div>
              </div>
              <div className="p-7"><p className="text-cyan-400 text-sm font-semibold mb-2">Landing Pages • Funnels</p><h3 className="text-2xl font-bold mb-3">Sales Funnel Design</h3><p className="text-white/60">Showcase website funnels, lead capture pages, booking flows, and conversion-focused page designs.</p></div>
            </motion.div>
          </div>
        </section>

        <section id="process" className="max-w-7xl mx-auto px-6 py-20"><div className="rounded-[2rem] bg-white text-black p-8 md:p-12"><p className="text-black/60 font-semibold mb-3">Our process</p><h2 className="text-4xl font-black mb-10">From idea to execution</h2><div className="grid md:grid-cols-5 gap-4">{process.map((step, index) => (<div key={step} className="rounded-3xl bg-black/[0.04] p-5"><div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-5">{index + 1}</div><h3 className="font-bold text-lg">{step}</h3></div>))}</div></div></section>

        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center"><div><p className="text-cyan-400 font-semibold mb-3">Why choose us</p><h2 className="text-4xl font-bold mb-6">Creative execution with marketing direction.</h2><p className="text-white/60 text-lg mb-6">We do not just make content look good. We create assets with strategy, audience attention, and business goals in mind.</p><div className="space-y-4">{["Premium visuals for stronger brand perception", "Short-form content optimized for attention", "Flexible support for small businesses and growing brands", "AI-enhanced workflows for faster creative output"].map((item) => (<div key={item} className="flex gap-3 items-center text-white/80"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> {item}</div>))}</div></div><Card className="rounded-[2rem] bg-white/5 border border-white/10 text-white"><CardContent className="p-8"><p className="text-2xl font-bold leading-relaxed">“Altspace Digital Solution turned our ideas into clean, premium-looking content that felt ready for ads and social media. The visuals looked professional and the direction was easy to follow.”</p><p className="text-white/50 mt-6">— Sample Client Feedback</p></CardContent></Card></section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-24"><div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 p-8 md:p-14 text-center"><h2 className="text-4xl md:text-5xl font-black mb-5">Ready to build your brand presence?</h2><p className="text-white/70 max-w-2xl mx-auto mb-8">Let’s create content, campaigns, and digital assets that make your business stand out online.</p><div className="flex flex-col sm:flex-row justify-center gap-4 mb-8"><Button className="rounded-full h-12 px-8 bg-white text-black hover:bg-white/90">Work With Us</Button><Button className="rounded-full h-12 px-8 border border-white/20 bg-white/5 text-white hover:bg-white/10">View Packages</Button></div><div className="flex flex-col md:flex-row justify-center gap-5 text-white/60 text-sm"><span className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> altspace.digitalsolution@gmail.com</span><span className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> +63 900 000 0000</span><span className="flex items-center justify-center gap-2">● Altspace Digital Solution</span></div></div></section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/40 text-sm">© 2026 Altspace Digital Solution. All rights reserved.</footer>
    </div>
  );
}
