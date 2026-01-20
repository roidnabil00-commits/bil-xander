import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Database, ChevronRight, Mail, MessageCircle, 
  CheckCircle, Zap, Globe, Plus, Minus, Server, ShieldCheck, 
  BarChart3, Instagram, Play, ArrowRight, Layers, Cpu, Lightbulb,
  Menu, X
} from 'lucide-react';

// --- CUSTOM ICONS ---
const TiktokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- DATA SOURCE ---
const socialLinks = [
  { name: "WhatsApp", icon: <MessageCircle />, url: "https://wa.me/6281931656410", color: "hover:text-green-500" },
  { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/bil.xander/", color: "hover:text-pink-500" },
  { name: "TikTok", icon: <TiktokIcon className="w-6 h-6" />, url: "https://tiktok.com/@abil_aiforbusiness", color: "hover:text-white" },
  { name: "Email", icon: <Mail />, url: "mailto:valifyvibe@gmail.com", color: "hover:text-cyan-400" },
];

const processes = [
  {
    title: "1. Discovery & Audit",
    desc: "Membedah masalah berbasis data. Kami memulai dengan membedah akar masalah bisnis Anda secara mendalam. Kami tidak bekerja dengan asumsi, melainkan mencari solusi yang mengacu sepenuhnya pada data nyata (data-driven) untuk memastikan masalah yang kami selesaikan adalah masalah yang tepat.",
    icon: <Lightbulb className="text-yellow-400" />
  },
  {
    title: "2. Strategy Formulation",
    desc: "Merancang Blueprint yang tepat sasaran. Kami merumuskan strategi spesifik yang paling cocok untuk masalah Anda. Kami menyusun cetak biru (blueprint) sistem yang tidak hanya solutif, tetapi juga memprioritaskan Efisiensi, Skabilitas, dan Keamanan sebagai fondasi utama.",
    icon: <Layers className="text-cyan-400" />
  },
  {
    title: "3. Tech Solutions and Execution",
    desc: "Eksekusi solusi teknologi yang presisi. Setelah strategi matang, kami langsung mengeksekusi rencana dengan solusi teknis yang terukur. Kami memastikan teknologi yang digunakan benar-benar match (cocok) dan capable (mampu) untuk menuntaskan masalah tersebut hingga ke akarnya.",
    icon: <Cpu className="text-purple-400" />
  }
];

const projects = [
  {
    title: "POS System AI",
    category: "F&B Innovation",
    image: "pos.png", 
    desc: "Revolusi manajemen kasir. Fitur mencakup AI Waiters, stok real-time, laporan laba rugi otomatis, dan QR Menu.",
    result: "Efisiensi operasional naik 40%.",
    tags: ["AI Waiters", "Real Time", "Efficient"],
    icon: <Server className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Sales Management System",
    category: "FMCG Retail",
    image: "sms.png", 
    desc: "Sistem kendali terpadu memantau transaksi & stok real-time di seluruh titik penjualan untuk akurasi data.",
    result: "Hemat biaya operasional 50%.",
    tags: ["Tracking", "Analytics AI", "Cost Cut"],
    icon: <Globe className="w-6 h-6 text-purple-400" />
  },
  {
    title: "SuperviseID Systems",
    category: "Facility Care",
    image: "id.png", 
    desc: "Sistem pengawasan digital real-time. Memastikan setiap jengkal operasional terverifikasi langsung ke pusat kendali.",
    result: "Zero celah operasional.",
    tags: ["Verified", "Control Center", "Digital"],
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />
  }
];

const contents = [
  {
    title: "AI Menggantikan Manusia?",
    platform: "TikTok",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    views: "1.2M Views",
    link: "#"
  },
  {
    title: "Cara Kerja POS AI Xander",
    platform: "Instagram",
    thumbnail: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop",
    views: "45K Views",
    link: "https://www.instagram.com/reel/DPyc7BLgWkR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Masa Depan Blockchain 2030",
    platform: "TikTok",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
    views: "890K Views",
    link: "#"
  }
];

const faqs = [
  {
    q: "Apakah bisa request sistem sesuai masalah bisnis saya?",
    a: "Tentu saja. Kami menyediakan solusi custom yang disesuaikan spesifik dengan 'pain point' dan kebutuhan operasional bisnis Anda."
  },
  {
    q: "Mahal gak harga sistem atau jasanya?",
    a: "Kami menawarkan solusi berbasis value. Investasi teknologi ini dirancang untuk menekan biaya operasional jangka panjang (Cost Efficiency) dan meningkatkan profit."
  },
  {
    q: "Apa bedanya Xander Systems dengan yang lain?",
    a: "Kami tidak hanya membuat software. Kami adalah 'The Strategist' yang menggabungkan Strategi Bisnis, Manajemen SDM, dan Teknologi AI menjadi satu solusi utuh."
  }
];

// --- COMPONENTS ---

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Accordion = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-800">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:text-cyan-400 transition"
      >
        <span className="text-base md:text-lg font-medium text-white pr-4">{q}</span>
        {isOpen ? <Minus className="text-cyan-400 flex-shrink-0" /> : <Plus className="text-gray-500 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // MENU ITEMS CONFIG (Untuk sinkronisasi Navbar dan Section ID)
  const navItems = [
    { label: 'Profile', href: '#about' }, // Profile lari ke ID "about"
    { label: 'Process', href: '#process' }, // Process lari ke ID "process"
    { label: 'Portfolio', href: '#portfolio' }, // Portfolio lari ke ID "portfolio"
    { label: 'Insights', href: '#content' } // Insights lari ke ID "content"
  ];

  return (
    <div className="min-h-screen bg-dark text-gray-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo - SEO CHANGE: Diganti jadi DIV agar H1 fokus di Hero Section */}
          <div className="flex items-center gap-2 z-50">
            <div role="button" className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              XANDER <span className="text-cyan-400">SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Menu (SUDAH DIPERBAIKI SINKRONISASINYA) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white hover:text-cyan-400 transition">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a href="#contact" className="hidden md:block px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition transform">
              Start Project
            </a>
            
            {/* Hamburger Button (Mobile Only) */}
            <button 
              className="md:hidden text-white focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (SUDAH DIPERBAIKI SINKRONISASINYA) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden z-40"
            >
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition tracking-widest uppercase"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-16 h-[1px] bg-gray-800 my-4"></div>
              <p className="text-gray-500 text-sm">Xander Systems Mobile</p>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          {/* SEO CHANGE: Ini adalah satu-satunya H1 di halaman ini */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building The Future, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Advancing New Era.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
            "Tech & AI will be our life partners. Adapt and be efficient now."
          </p>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            {socialLinks.map((social, index) => (
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 transition duration-300 ${social.color} hover:border-gray-600`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition flex items-center justify-center gap-2 group text-sm md:text-base cursor-pointer"
            >
              Konsultasi Gratis <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE PROFILE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-xs md:max-w-md"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative aspect-[3/4] bg-gray-900 rounded-2xl border border-gray-800 p-2 overflow-hidden shadow-2xl">
            <img 
              src="/bil-profile.jpg" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "logo.png"; 
              }}
              alt="Bil Xander" 
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-700"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-bold text-base md:text-lg">Bil Xander</p>
                  <p className="text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest">Tech Strategist</p>
                </div>
                <div className="flex gap-2 items-center bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-green-400 font-bold uppercase">Online</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* STATS STRIP */}
      <div className="border-y border-gray-800 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
          {[
            { label: "Projects Done", value: "13+" },
            { label: "Experience", value: "2 Years" },
            { label: "Satisfaction", value: "99%" },
            { label: "Team Led", value: "17+" }
          ].map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="text-center md:text-left"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ABOUT / VISION SECTION */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-cyan-400 font-bold tracking-widest mb-2 uppercase flex items-center gap-2 text-sm">
              <span className="w-8 h-[1px] bg-cyan-400"></span> The Strategist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Technology is meant to drive solutions and efficiency, <br/> 
              <span className="text-gray-500">not to become a liability.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                Halo, Xander disini. Di tengah percepatan era AI dan Blockchain, Kami berpegang pada prinsip bahwa teknologi seharusnya menjadi pendorong solusi dan efisiensi, bukan menjadi beban (liabilitas). Namun ironisnya, masih banyak bisnis yang tidak menyadari hal ini 
                mereka belum tahu bahwa teknologi adalah kunci utama untuk mengubah bisnis menjadi sangat efisien, berkembang pesat, dan mencapai profitabilitas (full margin) yang maksimal.
              </p>
              <p>
                Banyak juga yang sekadar ikut-ikutan teknologi tanpa strategi, yang akhirnya malah merugi. Kami hadir untuk mengubah kerumitan itu menjadi solusi.
                Kami merancang sistem yang mengurus teknis operasional secara mandiri, sehingga Anda bisa menikmati pertumbuhan bisnis yang pesat dan margin keuntungan yang maksimal.
              </p>
              <p className="text-white font-medium">
                Vision 2030 To become a global leader in building an intelligent, efficient, and inclusive technology ecosystem where everyone can thrive.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
               {['Business Strategy', 'AI Integration', 'System Analysis', 'Leadership'].map(tag => (
                 <span key={tag} className="px-3 py-2 md:px-4 md:py-2 bg-gray-800 rounded-lg text-xs md:text-sm text-gray-300 border border-gray-700 hover:border-cyan-500 transition cursor-default">{tag}</span>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-10 rounded-3xl border border-gray-800 flex flex-col justify-center relative overflow-hidden min-h-[300px] md:min-h-[400px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">Core Philosophy</h3>
            <blockquote className="text-gray-300 italic text-lg md:text-xl relative z-10 border-l-4 border-cyan-500 pl-6 leading-relaxed">
              "Bagi kami, Tech & coding hanyalah alat. Peran utama kami adalah menjadi pionir yang mentransformasi tantangan Anda menjadi sistem yang nyata dan adaptif, memastikan setiap tujuan bisnis Anda tercapai dengan lebih mudah."
            </blockquote>
            <div className="mt-auto pt-8 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg md:text-xl">
                B
              </div>
              <div>
                <p className="text-white font-bold text-sm md:text-base">Bil Xander</p>
                <p className="text-xs text-gray-500">Founder Xander Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* NEW SECTION: WORK PROCESS */}
      <Section id="process" className="bg-gray-900/20">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-xs md:text-sm">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Turning Complexity into Efficiency</h2>
          <p className="text-gray-400 text-sm md:text-base">
            "Sesungguhnya Beserta Kesulitan Ada Kemudahan", Berlandaskan keyakinan bahwa beserta kesulitan ada kemudahan, Xander Tech Systems hadir untuk mengubah masalah, tantangan, dan kekurangan menjadi sistem yang efisien dan produktif.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {processes.map((proc, index) => (
            <motion.div 
              variants={fadeInUp}
              key={index} 
              className="bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-800 hover:bg-gray-800 transition duration-300"
            >
              <div className="mb-6 bg-gray-900 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-gray-700">
                {proc.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-white">{proc.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {proc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PORTFOLIO WITH IMAGES */}
      <Section id="portfolio">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs md:text-sm">Our Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Masterpieces Projects</h2>
          </div>
          <button className="text-sm font-bold border-b border-gray-600 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition hidden md:block">View All Projects</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              key={index} 
              className="group rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  {project.icon}
                  <span className="text-[10px] md:text-xs font-bold text-white">{project.category}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-cyan-300 bg-cyan-900/10 px-2 py-1 rounded border border-cyan-900/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-800 mt-auto flex justify-between items-center">
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-xs">
                    <CheckCircle size={14} /> {project.result}
                  </div>
                  <motion.div whileHover={{ x: 5 }}>
                    <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition cursor-pointer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NEW SECTION: CONTENT & VIDEO FEEDS */}
      <Section id="content" className="bg-gray-900/20">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-[10px] md:text-xs font-bold tracking-widest mb-4 inline-block">
            INSIGHTS & UPDATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Content</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Ikuti perjalanan dan edukasi seputar teknologi, AI, dan strategi bisnis melalui konten eksklusif kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contents.map((content, index) => (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="relative group rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[4/5] bg-gray-800 border border-gray-700"
            >
              <img 
                src={content.thumbnail} 
                alt={content.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer"
                >
                  <Play fill="white" className="text-white ml-1" />
                </motion.div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${content.platform === 'TikTok' ? 'bg-black text-white border border-gray-700' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'}`}>
                    {content.platform}
                  </span>
                  <span className="text-xs text-gray-300">{content.views}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight mb-4">{content.title}</h3>
                <a 
                  href={content.link} 
                  className="w-full py-3 bg-white/10 backdrop-blur hover:bg-white text-white hover:text-black font-bold rounded-lg transition flex items-center justify-center gap-2 text-sm opacity-0 group-hover:opacity-100"
                >
                  Tonton Sekarang <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section id="contact" className="text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to ADAPT?</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 px-4">
            Dunia tidak akan berhenti berputar hanya karena kamu menolak berubah. <br className="hidden md:block"/>
            <span className="text-white font-semibold">Berubah sekarang atau punah selamanya.</span>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4">
            <a 
              href={socialLinks[0].url}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#25D366] text-black font-bold rounded-full hover:bg-[#1ef064] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <MessageCircle size={20} /> Chat WhatsApp
            </a>
            {/* FIX: EMAIL BUTTON LANGSUNG KE MAILTO */}
            <a 
              href="mailto:valifyvibe@gmail.com"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700 border border-gray-700 transition flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Mail size={20} /> Email Me
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-900 bg-black text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">XANDER <span className="text-cyan-400">SYSTEMS</span></h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mx-auto md:mx-0">
              "Sesungguhnya Beserta Kesulitan Ada Kemudahan", Berlandaskan keyakinan bahwa beserta kesulitan ada kemudahan, Xander Tech Systems hadir untuk mengubah masalah, tantangan, dan kekurangan menjadi sistem yang efisien dan produktif.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="https://www.instagram.com/bil.xander/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">Instagram</a></li>
              <li><a href="https://tiktok.com/@abil_aiforbusiness" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">TikTok</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>valifyvibe@gmail.com</li>
              <li>+62 819 3165 6410</li>
              <li>Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          &copy; 2026 Xander Systems. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App; 