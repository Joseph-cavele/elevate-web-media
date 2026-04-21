import { BtnOline } from "../ui/BtnOuline"
import { BtnPrimary } from "../ui/BtnPrimary"
import { Badge } from "../ui/Badge"
import { Reveal } from "../ui/Reveal"
import { C } from "../../Style/color"
import HeroImage from  "../../assets/Images/hero-bg.png"
import { MarketingCards } from "../MarketingCards"
import {Link} from "react-router-dom"
          


    
    
export  function Hero() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .f1 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
        .f2 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
        .f3 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.4s both; }
        .f4 { animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.55s both; }
        .f5 { animation: fadeIn 0.9s ease 0.5s both; }
        .btn-p {
          background: #16a34a; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          padding: 13px 30px; border-radius: 8px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(22,163,74,.35);
          transition: background .2s, transform .15s, box-shadow .2s;
        }
        .btn-p:hover { background: #15803d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(22,163,74,.4); }
        .btn-s {
          background: transparent; color: #16a34a;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          padding: 12px 30px; border-radius: 8px; border: 2px solid #16a34a; cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .btn-s:hover { background: #f0fdf4; transform: translateY(-2px); }
        .float-card {
          background: #fff; border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.13), 0 2px 8px rgba(0,0,0,.06);
        }
        .avatar-slot {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg,#e2e8f0,#cbd5e1);
          border: 2.5px solid #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .img-slot {
          width: 100%; border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg,#f1f5f9,#e2e8f0);
          
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: #94a3b8; gap: 10px;
          height: 450px;
     
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16
                      grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ───── LEFT ───── */}
        <div>
          {/* Badge */}
          <div className="f1 inline-flex items-center gap-2 bg-blue-50 text-blue-700
                          text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Digital Marketing
          </div>

          {/* Heading */}
          <h1 className="f2 text-4xl md:text-5xl font-extrabold font-poppins text-gray-900
                         leading-tight mb-5"
              style={{  letterSpacing:"-0.02em" }}>
            Grow Your Business with{" "}
            <span style={{color:C.h1}}>Data-Driven</span>{" "}
            Digital Marketing
          </h1>

          {/* Body */}
          <p className="f3 text-gray-500 text-[15px] font-OpenSans  leading-relaxed mb-9 max-w-md">
             
            We help brands reach their full potential through smart strategy,
            creative execution, and measurable results. Let's build something
            remarkable together.
          </p>

          {/* Buttons */}
          <div className="f4 flex flex-wrap gap-3 mb-10">
            <BtnPrimary to="/projectinquiry">Get Started Free </BtnPrimary>
           <Link to="/contact"> <BtnOline>Contact Us</BtnOline> </Link>
          </div>

          {/* Social proof */}
          <div className="f4 flex items-center gap-4">
            {/* Avatar stack — replace each div with <img> */}
            <div className="flex">
              {[0,1,2,3].map(i => (
                <div key={i} className="avatar-slot" style={{ marginLeft: i===0 ? 0 : -10, zIndex: 4-i }}>
                  {/* ← client image goes here */}
                  <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500" style={{ fontFamily:"DM Sans" }}>
                <span className="font-semibold text-gray-800">2,400+</span> happy clients worldwide
              </p>
            </div>
          </div>
        </div>

        {/* ───── RIGHT ───── */}
        <div className="f5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none">

            {/* ── HERO IMAGE SLOT ── */}
            <div className="img-slot">
              <svg width="44" height="44" fill="none" stroke="#cbd5e1" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              
               <img src={HeroImage} width={200} alt="Hero" className="w-full h-120  object-cover rounded-lg shadow-md"/>
                <br/>
               
          
            </div>

            {/* Green pill on image */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2
                            bg-blue-500 text-white text-xs font-semibold
                            px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              🚀 Join the Future of Marketing
            </div>

            {/* ── Floating rating card ── */}
            <div className="float-card absolute -left-6 top-8 w-52 p-4 f3">
              <p className="text-xs font-OpenSans font-semibold text-gray-800 leading-snug mb-2">
                Creating Impactful Digital Experiences for Your Business!
              </p>
              {/* Stars */}
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4].map(s => (
                  <svg key={s} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-3 h-3 fill-gray-200" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 leading-none mb-1"
                   style={{ fontFamily:"Sora" }}>9.6</div>
              <p className="text-xs text-gray-400 mb-3">Satisfaction score from clients</p>

              {/* ── CLIENT AVATAR STACK ── */}
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[0,1,2].map(i => (
                    <div key={i} className="avatar-slot"
                         style={{ marginLeft: i===0 ? 0 : -8, zIndex: 3-i, width:30, height:30 }}>
                      {/* ← client image goes here */}
                      <svg width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Our Clients</div>
                  <div className="text-xs text-blue-600 font-semibold">● Active</div>
                </div>
              </div>
            </div>

            {/* ── Floating stat pill ── */}
            <div className="float-card absolute -bottom-5 right-0 flex items-center gap-3 px-4 py-3 f4">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-lg shrink-0">📈</div>
              <div>
                <div className="text-sm font-extrabold text-gray-900" style={{ fontFamily:"Sora" }}>+172%</div>
                <div className="text-xs text-gray-400">Avg. client growth</div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}