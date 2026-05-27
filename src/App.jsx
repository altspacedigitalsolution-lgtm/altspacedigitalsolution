import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Megaphone,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";

const services = [
  { icon: <Clapperboard className="w-6 h-6" />, title: "Video Editing", desc: "High-retention reels, ads, brand videos, motion graphics, and AI-enhanced edits." },
  { icon: <Camera className="w-6 h-6" />, title: "Photo & Video Production", desc: "Creative shoots for products, travel, corporate, and social media content." },
  { icon: <Megaphone className="w-6 h-6" />, title: "Social Media Management", desc: "Content planning, posting, creative direction, and marketing strategy." },
  { icon: <Sparkles className="w-6 h-6" />, title: "AI Creative Workflows", desc: "AI avatars, automation concepts, and AI-powered creative systems." },
];

const works = [
  {
    title: "Travel Ads Video",
    category: "Travel / Ads",
    youtubeId: "9EnXHOzzF38",
  },
  {
    title: "BPO Corporate Video",
    category: "Corporate",
    youtubeId: "D5OUucKNJOs",
  },
  {
    title: "Product Ads Video",
    category: "Product Ads",
    youtubeId: "kP__JT0H2BA",
  },
  {
    title: "Real Estate Reel",
    category: "Real Estate",
    youtubeId: "5T1_Yndj0Mk",
  },
  {
    title: "Luxury Ads",
    category: "Luxury / Commercial",
    youtubeId: "Zd-wwdh22Mc",
  },
  {
    title: "Product Commercial",
    category: "Product / Ads",
    youtubeId: "RlLpRdjCpks",
  },
  {
    title: "Food Ads",
    category: "Food / Commercial",
    youtubeId: "eW920rlqFY4",
  },
  {
    title: "Food Vlog",
    category: "Long-form Content",
    youtubeId: "OxCItqgFZwg",
  },
];
 
const funnelDesigns = [
  { name: "Skincare Cart", src: "/funnels/skincare_cart/index.html" },
  { name: "Government Assistance Form", src: "/funnels/gov_assistanceform/index.html" },
  { name: "Aesthetic Clinic", src: "/funnels/aesthetic_clinic/index.html" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6d28d950,transparent_35%),radial-gradient(circle_at_top_left,#0ea5e950,transparent_35%)] pointer-events-none" />

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <img src="/logoaltspace.png" alt="Altspace Logo" className="h-24 object-contain" />

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Portfolio</a>
          <a href="#graphics">Graphics</a>
          <a href="#funnels">Funnels</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="rounded-full bg-white text-black px-5 py-2 font-semibold">
          Start a Project
        </a>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Digital Marketing • Video • AI Creative
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Creative Digital Solutions that make brands look premium.
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Altspace Digital Solution helps businesses grow through high-impact video editing,
            content creation, social media management, and AI-powered marketing systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-cyan-400 text-black px-7 py-3 font-bold flex items-center gap-2">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="rounded-full border border-white/15 px-7 py-3">
              Book Consultation
            </a>
          </div>
        </div>

        <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden p-4">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-cyan-400/25 via-violet-500/20 to-white/10 flex items-end p-6">
            <div className="rounded-3xl bg-black/50 border border-white/10 p-6 w-full">
              <p className="text-sm text-white/60 mb-2">Featured Capability</p>
              <h3 className="text-2xl font-bold">Video-first marketing built for attention.</h3>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative">
              <img src="/carl-photo.png" alt="Carlwinn Pangilinan" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-2xl font-black">Carlwinn Pangilinan</h3>
                <p className="text-cyan-300 mt-2">Creative Content Specialist • Video Editor • Digital Marketer</p>
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-cyan-400 font-semibold mb-3">About the founder</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Hi, I’m Carl Winn — the creative mind behind Altspace Digital Solution.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-5">
              I’m a multimedia creative and digital marketing specialist from the Philippines with strong experience in video editing, content creation, social media management, and brand-focused visual production.
            </p>

            <p className="text-white/70 text-lg leading-relaxed mb-7">
              Through Altspace Digital Solution, I help businesses create premium-looking content, stronger online presence, and modern marketing assets — from videos and graphics to funnels, campaigns, and AI-powered creative systems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {["5+ Years Video Editing", "Social Media Management", "Photo & Video Production", "AI Creative Workflows", "Ad Creative Direction", "Funnels & Landing Pages"].map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-cyan-400 font-semibold mb-3">What we do</p>
          <h2 className="text-4xl font-bold">Services designed for modern brands</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, index) => (
            <div key={index} className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 text-cyan-300 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-cyan-400 font-semibold mb-3">Selected work</p>
          <h2 className="text-4xl font-bold">Vertical Video Showcase</h2>
          <p className="text-white/60 max-w-2xl mt-4">
            Scroll horizontally to explore reels, ads, AI UGC videos, product commercials, and cinematic edits.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max pb-4">
            {works.map((work, index) => (
              <motion.div key={index} whileHover={{ y: -6 }} className="w-[280px] rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden shrink-0">
                <div className="aspect-[9/16] bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
                    title={work.title}
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <p className="text-cyan-400 text-sm mb-2">{work.category}</p>
                  <h3 className="text-xl font-bold">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="graphics" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-cyan-400 font-semibold mb-3">Graphic Design</p>
          <h2 className="text-4xl font-bold">Graphic Posters & Ad Creatives</h2>
          <p className="text-white/60 max-w-2xl mt-4">
            A 4:5 auto-sliding showcase for posters, product ads, food creatives, real estate visuals, and AI UGC graphics.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {["REAL ESTATE POSTER", "FOOD ADS DESIGN", "AI UGC CREATIVE", "PRODUCT POSTER", "REAL ESTATE POSTER", "FOOD ADS DESIGN", "AI UGC CREATIVE", "PRODUCT POSTER"].map((label, index) => (
              <div key={`${label}-${index}`} className="aspect-[4/5] w-[260px] rounded-[1.75rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-white/10 border border-white/10 p-6 flex flex-col justify-between shrink-0">
                <div>
                  <p className="text-xs text-cyan-300 font-bold">GRAPHIC {((index % 4) + 1)}</p>
                  <h3 className="text-3xl font-black leading-tight mt-3">{label}</h3>
                </div>
                <div className="space-y-3">
                  <div className="h-40 rounded-3xl bg-white/10" />
                  <div className="h-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="funnels" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-cyan-400 font-semibold mb-3">Funnel Designs</p>
          <h2 className="text-4xl font-bold">Live Funnel Preview</h2>
          <p className="text-white/60 max-w-2xl mt-4">
            All 3 HTML funnel pages are shown below so nothing is hidden.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {funnelDesigns.map((funnel) => (
            <motion.div key={funnel.name} whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="p-5 border-b border-white/10">
                <h3 className="text-xl font-bold">{funnel.name}</h3>
                <a href={funnel.src} target="_blank" rel="noreferrer" className="text-cyan-400 text-sm mt-2 inline-block">
                  Open full preview
                </a>
              </div>

              <div className="aspect-[4/5] bg-white">
                <iframe
                  src={funnel.src}
                  className="w-full h-full border-0"
                  title={funnel.name}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-5">Ready to build your brand?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let’s create premium content, funnels, and campaigns that help your business stand out online.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:altspace.digitalsolution@gmail.com" className="rounded-full bg-white text-black px-8 py-3 font-bold">Work With Us</a>
            <a href="#services" className="rounded-full border border-white/15 px-8 py-3">View Packages</a>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5 text-white/60 text-sm">
            <span className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              altspace.digitalsolution@gmail.com
            </span>

            <span className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              +63 966 189 6783
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}