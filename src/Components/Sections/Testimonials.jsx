
import { useState, useEffect, useRef } from "react";
import { testimonials } from "../../data/Testimonials";

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path
      fill={filled ? "#facc15" : "#e5e7eb"}
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
);

const Stars = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= rating} />)}
  </div>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Testimonials() {
  const [current, setCurrent]     = useState(0);
  const [dir, setDir]             = useState("right");
  const [animating, setAnimating] = useState(false);
  const autoRef                   = useRef(null);
  const total                     = testimonials.length;

  const go = (direction) => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        direction === "right" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setAnimating(false);
    }, 320);
    restartAuto();
  };

  const goTo = (i) => {
    if (i === current || animating) return;
    setDir(i > current ? "right" : "left");
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 320);
    restartAuto();
  };

  const restartAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go("right"), 5500);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setDir("right");
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setAnimating(false);
      }, 320);
    }, 5500);
    return () => clearInterval(autoRef.current);
  }, []);

  const t = testimonials[current];

  const slideStyle = animating
    ? dir === "right"
      ? "opacity-0 -translate-x-10 scale-98"
      : "opacity-0 translate-x-10 scale-98"
    : "opacity-100 translate-x-0 scale-100";

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-600 text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
            Real results from real businesses — here's what clients experienced after partnering with us.
          </p>
        </div>

        {/* Main card */}
        <div className="relative px-6">

          {/* Glow */}
          <div className={`absolute -inset-2 rounded-3xl bg-linear-to-br ${t.color} opacity-10 blur-2xl transition-all duration-700`} />

          <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
            {/* Gradient top bar */}
            <div className={`h-1.5 bg-linear-to-r ${t.color} transition-all duration-500`} />

            <div className={`p-8 sm:p-12 transition-all duration-300 ease-out ${slideStyle}`}>
              <div className="flex flex-col sm:flex-row gap-8 items-start">

                {/* Left */}
                <div className="flex flex-col items-center sm:items-start gap-3 shrink-0 w-full sm:w-auto">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-2xl object-cover shadow-md" />
                    <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-linear-to-br ${t.color} flex items-center justify-center shadow`}>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="font-bold text-gray-900 text-base">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>

                  <Stars rating={t.rating} />

                  <div className={`px-3 py-1.5 rounded-xl bg-linear-to-r ${t.color} text-white text-xs font-bold shadow-sm whitespace-nowrap`}>
                    {t.metric}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 relative">
                  <svg viewBox="0 0 24 24" className={`w-10 h-10 fill-current opacity-10 bg-linear-to-r ${t.color} text-blue-500`}>
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 font-light italic">
                    "{t.text}"
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => go("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 hover:border-[#aaef45] hover:bg-[#aaef45] text-gray-500 hover:text-gray-900 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10">
            <ChevronLeft />
          </button>
          <button
            onClick={() => go("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 hover:border-[#aaef45] hover:bg-[#aaef45] text-gray-500 hover:text-gray-900 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10">
            <ChevronRight />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2.5 bg-slate-900" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Mini thumbnail strip */}
        <div className="mt-10 grid grid-cols-5 gap-3">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-2xl p-3 text-left border transition-all duration-200 hover:shadow-md
                ${i === current
                  ? "border-[#aaef45] bg-lime-50 shadow-sm scale-105"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <img src={item.avatar} alt={item.name} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-xs font-semibold text-gray-800 truncate">{item.name.split(" ")[0]}</span>
              </div>
              <Stars rating={item.rating} />
            </button>
          ))}
        </div>

        {/* Overall rating bar */}
        <div className="mt-10 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-black text-gray-900">4.9</span>
            <div>
              <Stars rating={5} />
              <p className="text-xs text-gray-400 mt-1">Based on 128 reviews</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 max-w-xs">
            {[5,4,3,2,1].map((star, i) => {
              const widths = ["90%","7%","2%","1%","0%"];
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-2">{star}</span>
                  <StarIcon filled={true} />
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full transition-all duration-500" style={{ width: widths[i] }} />
                  </div>
                  <span className="text-xs text-gray-400 w-6">{widths[i]}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}