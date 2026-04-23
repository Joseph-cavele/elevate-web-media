
import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Calendar, ChevronRight } from "lucide-react";
import { CONTACT_CARDS } from "../data/ContactData";
import { THANK_YOU_EMAIL_API } from "../Api/ThankyouEmail";

export function ContactPage (){

             const [form, setForm] = useState({ firstname: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,SetError]=useState({})

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async(e) => {
      e.preventDefault();


    try {
      const res=await fetch(THANK_YOU_EMAIL_API,{
        method:"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(form)
      })
      const data=await res.json()
      if(!res.ok){

        SetError({
           general: data.errors ? data.errors.join(", ") : data.message,
        })

        return;

        

      }
      setSent(true)
      
      
    } catch (error) {
      console.error(`Failed to post data ${error}` )
      
    }finally{
      setLoading(false)
    }

  
    if (!form.firstname || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const WHATSAPP_NUMBER = "27710836571"; // ← replace with your number (no + or spaces)
  const WHATSAPP_MSG = encodeURIComponent("Hi! I'd like to get in touch.");

  return (
    <div className="bg-gray-50 font-sans min-h-screen">

    

      {/* ── Page hero banner ── */}
      <div className="relative overflow-hidden bg-blue-900 px-8 md:px-16 py-16">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-800/60" />
        <div className="absolute -bottom-10 right-32 w-44 h-44 rounded-full bg-blue-700/40" />
        <div className="absolute top-10 right-72 w-16 h-16 rounded-full bg-blue-600/30" />

        <div className="relative max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-xl">
            Contact{" "}
            <em className="not-italic text-blue-400">Us</em>
          </h1>
          <p className="text-white/65 text-base mt-4 max-w-md leading-relaxed">
            Have a project in mind or just want to say hello? We'd love to hear
            from you. Our team typically responds within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* ── Make an Appointment card ── */}
        <div className="bg-blue-600 rounded-2xl px-8 py-7 mt-10 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-white text-xl font-bold">Make an Appointment</h2>
              <p className="text-white/70 text-sm mt-0.5">
                Book a free 30-minute strategy call with one of our specialists.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white hover:bg-blue-50 transition-colors text-blue-700 font-semibold text-sm rounded-full px-7 py-3.5 shrink-0 shadow-sm">
            Book a call <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Three contact info cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow group no-underline"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: card.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: card.iconColor }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  <p className="text-gray-900 font-bold text-base group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{card.sub}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Map ── */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72 md:h-96 bg-gray-100">
          <iframe
            title="Office location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151963305!2d-73.98784368459418!3d40.75488797932663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8d4c4a1fdf877!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            style={{ border: 0, display: "block" }}
          />
        </div>

        {/* ── Contact Form + WhatsApp ── */}
        <div className="mt-8 mb-16 grid md:grid-cols-5 gap-6">

          {/* Form — takes 3 of 5 columns */}
          <div className="md:col-span-3 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
              Send a message
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Let's start a conversation
            </h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg">Message sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ firstname: "", email: "", message: "" }); }}
                  className="mt-2 text-blue-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or ask us anything…"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] disabled:opacity-60 transition-all text-white font-semibold text-sm rounded-xl px-6 py-3.5"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right panel — takes 2 of 5 columns */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* WhatsApp card */}
            <div className="bg-[#075E54] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm flex-1">
              {/* WhatsApp logo in SVG */}
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-5 shadow-md">
                <svg viewBox="0 0 32 32" className="w-9 h-9" fill="white">
                  <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16.003c0 2.347.63 4.64 1.83 6.657L2.667 29.333l6.87-1.8a13.28 13.28 0 0 0 6.466 1.664c7.366 0 13.33-5.97 13.33-13.33 0-7.366-5.964-13.2-13.33-13.2zm7.743 18.777c-.32.9-1.867 1.72-2.567 1.8-.667.08-1.287.333-4.333-.9-3.7-1.5-6.067-5.3-6.25-5.543-.18-.24-1.48-1.967-1.48-3.753s.937-2.66 1.267-3.02c.333-.357.727-.447.97-.447h.693c.24 0 .56-.09.877.667.32.76 1.087 2.647 1.18 2.84.093.193.153.42.03.68-.12.26-.18.42-.36.647-.18.227-.377.507-.54.68-.18.193-.367.4-.157.787.21.387.933 1.54 2.003 2.493 1.373 1.227 2.533 1.607 2.9 1.787.367.18.58.153.793-.09.213-.24.913-1.067 1.16-1.433.247-.367.493-.307.833-.18.34.127 2.16 1.02 2.533 1.207.373.187.62.28.713.433.093.153.093.887-.227 1.787z"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Prefer a quick chat? Message us directly on WhatsApp and we'll respond right away.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.98] transition-all text-white font-semibold text-sm rounded-xl px-6 py-3.5 w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp
              </a>
              <p className="text-white/40 text-xs mt-4">
                Available Mon – Sat · 9 AM – 8 PM
              </p>
            </div>

            {/* Quick response promise */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-800">We're online now</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our average response time is <strong className="text-gray-800">under 2 hours</strong> during business hours. For urgent matters, WhatsApp is fastest.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}  




    


