import { PROJECTINQUIRY_API } from "../Api/ProjectInquiryApi";

import { useState } from "react";

const SERVICES = [
  "SEO Optimization",
  "Social Media Management",
  "Web Design & Development",
  "Content Marketing",
  "Email Marketing",
  "Pay-Per-Click Advertising",
  "Brand Strategy",
  "Graphic Design",
];

const BUDGETS = [
  "Under R5,000",
  "R5,000 - R10,000",
  "R10,000 - R25,000",
  "R25,000 - R50,000",
  "R50,000 - R100,000",
  "Above R100,000",
];



const Field = ({ label, error, optional, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
      {label}{" "}
      {optional && (
        <span className="normal-case font-normal text-gray-600">(Optional)</span>
      )}
    </label>
    {children}
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const inputCls = (error) =>
  `w-full px-4 py-3 bg-[#0f0f0f] border rounded-lg text-sm text-gray-100 placeholder-gray-600 outline-none transition-colors duration-200 focus:border-[#c8ff00] ${
    error ? "border-red-400" : "border-[#2a2a2a]"
  }`;

const selectCls = (error, hasValue) =>
  `w-full px-4 py-3 bg-[#0f0f0f] border rounded-lg text-sm outline-none transition-colors duration-200 cursor-pointer focus:border-[#c8ff00] ${
    error ? "border-red-400" : "border-[#2a2a2a]"
  } ${hasValue ? "text-gray-100" : "text-gray-600"}`;

export default function ProjectInquiry() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: "",
    projectBudget: "",

    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim() || form.fullName.length < 2)
      e.fullName = "Full name must be at least 2 characters";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email address";
    if (!form.phoneNumber || !/^\+?[\d\s\-().]{7,20}$/.test(form.phoneNumber))
      e.phoneNumber = "Please enter a valid phone number";
    if (!form.services) e.services = "Please select a service";
    if (!form.projectBudget) e.projectBudget = "Please select a budget";
    
    
    if (form.message && form.message.length > 500)
      e.message = "Message cannot exceed 500 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(PROJECTINQUIRY_API,
       
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setErrors({
          general: data.errors ? data.errors.join(", ") : data.message,
        });
        return;
      }
      console.log(data)
      setSubmitted(true);
    } catch {
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      services: "",
      projectBudget: "",
    
      message: "",
    });
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
        <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-10 py-14 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-[#c8ff00] rounded-full flex items-center justify-center text-2xl font-bold text-[#080808] mx-auto mb-6">
            ✓
          </div>
          <h2 className="text-2xl font-extrabold text-gray-100 mb-3">
            ProjectInject
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Thank you! We've received your consultation request and will be in
            touch shortly to confirm your booking.
          </p>
          <button
            onClick={resetForm}
            className="px-8 py-3 border border-[#2a2a2a] rounded-lg text-sm font-semibold text-gray-100 hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors duration-200"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  // Form
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-170">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#c8ff00] mb-3">
            Free Consultation
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight mb-3">
            Book a Session
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

          {/* General Error */}
          {errors.general && (
            <div className="bg-[#1a0a0a] border border-red-400 rounded-lg px-4 py-3 text-red-400 text-sm">
              {errors.general}
            </div>
          )}

          {/* Full Name */}
          <Field label="Full Name" error={errors.fullName}>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputCls(errors.fullName)}
            />
          </Field>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputCls(errors.email)}
              />
            </Field>

            <Field label="Phone Number" error={errors.phoneNumber}>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="+27 81 234 5678"
                className={inputCls(errors.phoneNumber)}
              />
            </Field>
          </div>
          

          {/* Service */}
          <Field label="Service Required" error={errors.services}>
            <select
              name="services"
              value={form.services}
              onChange={handleChange}
              className={selectCls(errors.services, form.services)}
            >
              <option value="">Select a services</option>
              {SERVICES.map((s) => (
                <option key={s} value={s} className="bg-[#0f0f0f] text-gray-100">
                  {s}
                </option>
              ))}
            </select>
          </Field>

          {/* Budget & Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Project Budget" error={errors.projectBudget}>
              <select
                name="projectBudget"
                value={form.projectBudget}
                onChange={handleChange}
                className={selectCls(errors.projectBudget, form.projectBudget)}
              >
                <option value="">Select a budget</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b} className="bg-[#0f0f0f] text-gray-100">
                    {b}
                  </option>
                ))}
              </select>
            </Field>

           
              
        
          </div>

          {/* Message */}
          <Field label="Message" error={errors.message} optional>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about what you need..."
              rows={4}
              className={`${inputCls(errors.message)} resize-y`}
            />
            <div className="flex justify-end mt-1">
              <span
                className={`text-xs ${
                  form.message.length > 500 ? "text-red-400" : "text-gray-600"
                }`}
              >
                {form.message.length}/500
              </span>
            </div>
          </Field>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-[#c8ff00] text-[#080808] font-bold text-sm rounded-lg
                 tracking-wide mt-2 transition-all duration-200 ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:brightness-110 hover:shadow-lg hover:shadow-[#c8ff00]/20 active:scale-95"
            }`}
          >
            {loading ? "Booking..." : "Book Free Consultation →"}
          </button>

        </form>
      </div>
    </div>
  );
}