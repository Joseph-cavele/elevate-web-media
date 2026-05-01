

import { useState } from "react";
import { THANK_YOU_EMAIL_API } from "../../Api/ThankyouEmail";
/* ── Icons ─────────────────────────────────────────────────── */
const FbIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2zM2 9h4v12H2zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.01.842-1.816 1.853-1.727 1.088.095 2.156.252 3.2.468a1.75 1.75 0 0 1 1.37 1.368l.394 2.04a1.75 1.75 0 0 1-.46 1.596l-.97.97a13.608 13.608 0 0 0 4.318 4.318l.97-.97a1.75 1.75 0 0 1 1.596-.46l2.04.394a1.75 1.75 0 0 1 1.368 1.37c.216 1.044.373 2.112.468 3.2.089 1.01-.717 1.853-1.727 1.853H18A15.75 15.75 0 0 1 2.25 6.75v-.412z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current fill-none" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

/* ── Input Component ────────────────────────────────────────── */
function Input({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200
          focus:ring-2 focus:ring-[#aaef45] focus:border-transparent
          ${error ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm]       = useState({ firstname: "", email: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.firstname.trim())           e.firstname = "First name is required.";
    if (!form.email.trim())               e.email     = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim())             e.message   = "Message is required.";
    return e;
  };

  const handleSubmit = async() => {

    try {
      const res=await fetch("https://hook.us2.make.com/trdpx9hjwyjy3fjr1nli1lsfxbv3kiwo",{
        method:"POST",
        headers:{"Content-Type" :"application/json"},
        body:JSON.stringify(form)
        
      })
       const data=await res.json()
      if(!res.ok){
        setErrors({
           general: data.errors ? data.errors.join(", ") : data.message,
        })
        return;
      }

      setSubmitted(true)
     
    
      
    } catch (error) {
      console.error(`Failed to submit data ${error}`)

      
    }finally{
      setLoading(false)
    }
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const socials = [
    { icon: <FbIcon />,  label: "Facebook",  href: "#", color: "hover:bg-blue-600" },
    { icon: <IgIcon />,  label: "Instagram", href: "#", color: "hover:bg-pink-500" },
    { icon: <TwIcon />,  label: "Twitter",   href: "#", color: "hover:bg-sky-500"  },
    { icon: <LiIcon />,  label: "LinkedIn",  href: "#", color: "hover:bg-blue-700" },
  ];

  const contacts = [
    { icon: <MailIcon />,  text: "hello@digexa.com"        },
    { icon: <PhoneIcon />, text: "+123-456-7890"            },
    { icon: <PinIcon />,   text: "Address Line 01, Any City" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-blue-600 text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">Contact Us</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Have a question or want to work together? Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Info card */}
            <div className=" bg-blue-800 rounded-2xl p-7 flex flex-col gap-5">
              <div>
                <p className="text-white font-bold text-lg mb-1">Let's talk</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reach out through any channel. We're always happy to hear from you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-[#aaef45] text-slate-400 group-hover:text-slate-900 flex items-center justify-center transition-all duration-200 shrink-0">
                      {c.icon}
                    </div>
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{c.text}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-slate-800"/>

              {/* Social icons */}
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">Follow us</p>
                <div className="flex gap-2.5">
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} title={s.label}
                      className={`w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 ${s.color}`}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/27710836571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-green-900/30"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right panel — Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="text-[#aaef45]"><CheckCircleIcon /></div>
                  <h3 className="text-xl font-bold text-gray-900">Message sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks, <strong>{form.firstname}</strong>! We've received your message and will reply to <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setForm({ firstname: "", email: "", message: "" }); setSubmitted(false); }}
                    className="mt-2 text-sm text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      label="First Name"
                      placeholder="John"
                      value={form.firstname}
                      onChange={set("firstname")}
                      error={errors.firstname}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={set("email")}
                      error={errors.email}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={set("message")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-all duration-200
                        focus:ring-2 focus:ring-[#aaef45] focus:border-transparent
                        ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300"}`}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center justify-center gap-2.5 w-full bg-blue-600 hover:bg-[#aaef45] hover:text-slate-900 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <><SendIcon /> Send Message</>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We typically respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}