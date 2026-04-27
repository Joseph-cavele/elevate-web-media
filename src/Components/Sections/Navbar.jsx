import { C } from "../../Style/color";
import { useState } from "react";

import { NAV_LINK } from "../../data/NavLink";
import { NavLink } from "react-router-dom";
import { BtnOline } from "../ui/BtnOuline";
import { BtnPrimary } from "../ui/BtnPrimary";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";


const PROTECTED_ROUTES = ["/about", "/services", "/contact"];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { authenticate } = useAuth();

    const handleNavClick = (path) => {
        if (PROTECTED_ROUTES.includes(path)) {
            authenticate();
        }
    };

    return (
        <nav
            className="sticky top-0 z-50 transition-all"
            style={{
                background: C.white,
                boxShadow: scrolled
                    ? "0 2px 20px rgba(0,0,0,.07)"
                    : "0 1px 0 #E2E8F0",
                transition: "box-shadow .3s",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <div className="flex items-center gap-2.5 select-none">
                    <div
                        style={{ background: C.cta }}
                        className="w-15 h-15 rounded-xl flex items-center justify-center"
                    >
                        <img src="/logo.png" width={80} alt="caveledigital logo" />
                    </div>

                    <div className="space-x-2.5">
                        <span
                            style={{ color: C.primary }}
                            className="font-poppins font-extrabold text-lg leading-none"
                        >
                            Cavele
                        </span>
                        <span className="font-poppins font-extrabold text-lg leading-none">
                            Digital
                        </span>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center justify-center gap-8">
                    {NAV_LINK.map((link) => (
                        <div className="flex items-center" key={link.path}>
                            <NavLink to={link.path} onClick={() => handleNavClick(link.path)}>{link.label}</NavLink>
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-3 font-poppins">
                    <BtnPrimary small to="/consultation">Get started</BtnPrimary>
                </div>

                {/* Hamburg */}
                <button
                    className="md:hidden p-2 flex flex-col gap-1.5"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className="block h-0.5 w-6 rounded-full transition-all cursor-pointer"
                            style={{
                                background: C.dark,
                                transform: menuOpen
                                    ? i === 0
                                        ? "rotate(45deg)  translate(4px,4px)"
                                        : i === 2
                                        ? "rotate(-45deg) translate(4px,-4px)"
                                        : "scaleX(0)"
                                    : "none",
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }}
                        />
                    ))}
                </button>
            </div>
            {menuOpen && (
                <div
                    className="md:hidden border-t px-6 pb-5 pt-3 flex flex-col gap-4"
                    style={{ borderColor: "#E2E8F0" }}
                >
                    {NAV_LINK.map((link) => (
                        <NavLink key={link.path} to={link.path} onClick={() => handleNavClick(link.path)} style={{ color: C.navLink }}>
                            {link.label}
                        </NavLink>
                    ))}
                    <div className="flex gap-3 flex-wrap">
                        <BtnOline small to="/contact">Book a Call</BtnOline>
                        <BtnPrimary small to="/projectinquiry">Start Project</BtnPrimary>
                    </div>
                </div>
            )}
        </nav>
    );
}

