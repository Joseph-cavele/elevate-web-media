import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Map } from "./Map";
import { FaWhatsapp } from "react-icons/fa";

export function ContactUs() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Valid email is required.";
        }
        if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!form.message.trim()) newErrors.message = "Message cannot be empty.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });
            setErrors({});
        }
    };

    const contactInfo = [
        { id: 1, icon: <FiPhone />, label: "Phone", value: "+27710836571" },
        { id: 2, icon: <FiMail />, label: "Email", value: "joseph@caveledigital.co.za" },
        { id: 3, icon: <FiMapPin />, label: "Address", value: "Rustenburg, Ikemeleng Section" },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10">
                    <div className="flex flex-col gap-10 items-center mx-auto p-7">
                        <div className="inline-flex items-center bg-gray-100 px-6 py-1.5 gap-9 rounded-full text-md font-semibold text-gray-600">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Contact Us
                        </div>
                        <div className="bg-blue-800 md:w-6xl w-full flex-col flex gap-5 text-center justify-center items-center p-8 rounded-2xl">
                            <h2 className="text-white text-lg font-bold">Make Appointment</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {contactInfo.map((info) => (
                                    <div key={info.id} className="flex flex-col items-center gap-3 p-5 bg-gray-100 rounded-lg">
                                        <div className="text-blue-600 text-2xl">{info.icon}</div>
                                        <h3 className="text-lg font-bold">{info.label}</h3>
                                        <p className="text-gray-600">{info.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Map />
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white w-full md:w-6xl rounded-lg shadow-lg p-8 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-4">
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                                    }`}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                                    }`}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                                    }`}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                                    }`}
                                    placeholder="Tell us how we can help you..."
                                />
                                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                            <p className="text-center text-gray-500">Or</p>
                            <a
                                href="https://wa.me/2710836571?text=Hello%20Cavele%20Digital%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                className="text-white w-full bg-[#25D366] py-3 text-center gap-3.5 items-center flex flex-row rounded-lg mt-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg justify-center"
                            >
                                <FaWhatsapp className="w-8 h-8" />
                                <span className="font-semibold text-lg">Chat on WhatsApp</span>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}