import { C } from "../../Style/color";
import logo from "../../assets/logo.png";

import {FaFacebook,FaWhatsapp,FaTiktok,FaInstagram} from "react-icons/fa"


export const Footer=()=>{

    const Social=[
            {icon:FaFacebook,linK:"https://facebook.com",id:1},
            {icon:FaWhatsapp,linK:"https://wa.me/27210836571?text=Hello there",id:2},
            {icon:FaInstagram,linK:"http://",id:3},
            {icon:FaTiktok,link:"https:///",id:4}
        ]

    return (
        <div>

            
      {/* ── FOOTER ──────────────────────────────── */}
      <footer style={{ background: C.dark }}>
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand col */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" >
                  <img src={logo} width={100} alt="caveledigital logo" />
                 
                </div>
                <div>
                  <span className="poppins font-extrabold text-lg" style={{ color:"#fff" }}>Cavele</span>
                  <span className="poppins font-extrabold text-lg" style={{ color: C.accent }}> Digital</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color:"#64748B" }}>
                A global digital marketing agency helping ambitious brands grow through data-driven strategy, creative content, and measurable results.
              </p>
              <div className="flex gap-2">

              {
                Social.map((social)=>{
                  const Icon=social.icon
                  return (
                    <div key={social.id}>
                      <a href={social.linK}>
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                        <Icon size={20} style={{ color: "#475569" }} className="transition-colors cursor-pointer"
                          onMouseEnter={e=>e.currentTarget.style.color=C.accent}
                          onMouseLeave={e=>e.currentTarget.style.color="#475569"}
                        />
                        </div>

                      </a>

                    </div>
                  )

                })
              }
              
              </div>
            </div>

            <div>
              <h4 className="poppins font-semibold text-sm mb-4" style={{ color:"#fff" }}>Services</h4>
              <ul className="space-y-2.5 text-sm">
                {["SEO Optimization","Social Media","Paid Advertising","Email Marketing","Brand & Content","Analytics"].map(l=>(
                  <li key={l} className="cursor-pointer transition-colors" style={{ color: C.footerTxt }}
                    onMouseEnter={e=>e.currentTarget.style.color=C.footerLink}
                    onMouseLeave={e=>e.currentTarget.style.color=C.footerTxt}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="poppins font-semibold text-sm mb-4" style={{ color:"#fff" }}>Company</h4>
              <ul className="space-y-2.5 text-sm">
                {["About Us","Portfolio","Pricing","Blog","Careers","Contact Us"].map(l=>(
                  <li key={l} className="cursor-pointer transition-colors" style={{ color: C.footerTxt }}
                    onMouseEnter={e=>e.currentTarget.style.color=C.footerLink}
                    onMouseLeave={e=>e.currentTarget.style.color=C.footerTxt}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
            style={{ borderColor:"#1E293B", color:"#475569" }}>
            <p>© 2026 Cavele Digital. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy","Terms of Service","Cookie Policy"].map(l=>(
                <span key={l} className="cursor-pointer transition-colors"
                  onMouseEnter={e=>e.currentTarget.style.color=C.accent}
                  onMouseLeave={e=>e.currentTarget.style.color="#475569"}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>

    
    )
}