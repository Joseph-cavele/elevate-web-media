
import { BarChart2, Megaphone, Target, Search, Mail, TrendingUp } from "lucide-react";
import {Link} from "react-router-dom"

const SERVICES = [
  {
    id: 1,
    icon: BarChart2,
    title: "Analytics & Insights",
    desc: "Real-time dashboards and performance reports that turn raw data into confident decisions.",
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Brand Campaigns",
    desc: "Story-driven campaigns that build recognition and connect with your target audience.",
  },
  {
    id: 3,
    icon: Target,
    title: "Paid Advertising",
    desc: "Precision-targeted ads across search and social that maximise your ad spend ROI.",
  },
  {
    id: 4,
    icon: Search,
    title: "SEO & Content",
    desc: "Optimised content strategies built for long-term search visibility.",
  },
  {
    id: 5,
    icon: Mail,
    title: "Email Marketing",
    desc: "Personalised email flows that nurture leads and drive repeat revenue.",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Growth Strategy",
    desc: "End-to-end planning that aligns every channel to your core business objectives.",
  },
];

const STATS = [
  { value: "200+", label: "Clients served" },
  { value: "94%",  label: "Retention rate" },
  { value: "3.8×", label: "Avg. ROI" },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 pb-16">

      {/* ── Hero image ── */}
      <div className="relative w-full h-105 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
          alt="Marketing team collaborating"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay + hero copy */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/40 to-blue-950/75 flex flex-col justify-end px-8 md:px-16 pb-12">

          {/* Pill tag */}
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white bg-white/10 border border-white/20 rounded-full px-4 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            Digital Marketing Agency
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
            We grow brands <br />
            that <em className="not-italic text-blue-400">matter</em>
          </h1>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-6">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5 tracking-wide">{s.label}</p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px h-8 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services panel — overlaps hero ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-blue-900 rounded-2xl px-8 md:px-12 py-10 -mt-10 relative z-10 shadow-2xl">

          {/* Panel header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">
                Our Services
              </p>
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-sm">
                Smart marketing that drives{" "}
                <em className="not-italic text-blue-400">real growth</em>
              </h2>
            </div>
            <Link to="/projectinquiry">
            <button className="shrink-0 self-start cursor-pointer bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium rounded-full px-6 py-3">
              Get started →
            </button>
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-6 pt-10 relative group hover:shadow-lg transition-shadow"
                >
                  {/* Floating icon */}
                  <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 shadow-md">
                    <Icon className="text-white w-5 h-5" />
                  </div>

                  <h3 className="text-gray-900 font-bold text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <p className="mt-4 text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}