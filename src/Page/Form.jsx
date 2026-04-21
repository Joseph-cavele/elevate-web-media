


/* ── Input Component ────────────────────────────────────────── */
export function Input({ label, type = "text", placeholder, value, onChange, error }) {
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
