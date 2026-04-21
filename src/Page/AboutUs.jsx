
import {Link} from "react-router-dom"

const VALUES = [
  {
    id: 1,
    color: "#dbeafe",
    iconColor: "#2563eb",
    title: "Radical transparency",
    desc: "No hidden fees, no confusing dashboards. You see exactly what we do and why, every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-blue-600">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    color: "#dcfce7",
    iconColor: "#16a34a",
    title: "Results over activity",
    desc: "We measure success in revenue generated, leads converted, and brands built — not hours logged.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-green-600">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 3,
    color: "#fef3c7",
    iconColor: "#d97706",
    title: "People-first culture",
    desc: "Great work comes from happy people. We invest in our team so they can invest their best energy in yours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-amber-600">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
];

const TEAM = [
  {
    id: 1,
    name: "James Osei",
    role: "CEO & Co-founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 2,
    name: "Amara Nwosu",
    role: "Head of Strategy",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 3,
    name: "Luca Ferreira",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    id: 4,
    name: "Priya Menon",
    role: "Data & Analytics",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const CHECKS = [
  "Transparent reporting with no vanity metrics",
  "Dedicated strategist on every account",
  "Performance guarantees backed by data",
];

// ── Checkmark icon ──────────────────────────────────────────────
function CheckIcon() {
  return (
    <div className="-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
      <svg viewBox="0 0 12 12" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 stroke-blue-600">
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-gray-50 font-sans">

      {/* ── Navbar ── */}
     

      {/* ── Hero ── */}
      <div className="relative h-120 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Modern open-plan office"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/85 via-blue-950/55 to-transparent flex flex-col justify-center px-8 md:px-16">
          {/* Pill tag */}
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white bg-white/10 border border-white/20 rounded-full px-4 py-1.5 w-fit mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            About us
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
            We are the team<br />
            behind{" "}
            <em className="not-italic text-blue-400">your growth</em>
          </h1>

          <p className="text-white/70 text-base mt-4 max-w-md leading-relaxed">
            Since 2015, we've helped over 200 brands turn bold ideas into measurable
            results — through strategy, creativity, and data.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium rounded-full px-6 py-3">
              Meet the team
            </button>
            <button className="border border-white/30 hover:bg-white/10 transition-colors text-white text-sm rounded-full px-6 py-3">
              Our story →
            </button>
          </div>
        </div>
      </div>

      {/* ── Our Story — split layout ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-14">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">

          {/* Image side */}
          <div className="relative min-h-105">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
              alt="Team collaborating around a table"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-blue-900 rounded-xl px-5 py-4 shadow-lg">
              <p className="text-3xl font-extrabold text-white leading-none">10+</p>
              <p className="text-xs text-white/60 mt-1 tracking-wide">Years of excellence</p>
            </div>
          </div>

          {/* Text side */}
          <div className="px-10 py-12 flex flex-col justify-center">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
              Our story
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-5">
              Built on passion,<br />
              driven by{" "}
              <em className="not-italic text-blue-600">results</em>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              We started as a small team of three in a co-working space with one shared
              belief: that great marketing should be honest, data-informed, and deeply human.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Today, Pulse.media is a 40-person agency trusted by startups, scale-ups,
              and established enterprises across four continents.
            </p>

            <div className="flex flex-col gap-3">
              {CHECKS.map((text) => (
                <div key={text} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-14">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
            What drives us
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our core values</h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Every decision we make is guided by the same three principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.id}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: v.color }}
              >
                {v.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Team ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-14">
        <div className="bg-blue-900 rounded-2xl px-8 md:px-12 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">
                The people
              </p>
              <h2 className="text-3xl font-bold text-white">
                Meet the minds behind{" "}
                <em className="not-italic text-blue-400">the magic</em>
              </h2>
            </div>
            <p className="text-white/50 text-sm max-w-xs md:text-right leading-relaxed">
              A diverse team of strategists, creatives, and analysts who love what they do.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-blue-800/50 rounded-xl overflow-hidden hover:bg-blue-800 transition-colors"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-44 object-cover object-top"
                />
                <div className="p-4">
                  <p className="text-white font-semibold text-sm">{member.name}</p>
                  <p className="text-white/50 text-xs mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10 mb-16">
        <div className="bg-blue-600 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-md">
            Ready to build something great together?
          </h2>
          <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">
          
          
          <button  className="shrink-0 bg-white cursor-pointer text-blue-700 hover:bg-blue-50 transition-colors font-semibold text-sm rounded-full px-8 py-4">
            Start a conversation →
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
}