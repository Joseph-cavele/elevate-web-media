import { C } from "../../Style/color";
import { BtnPrimary } from "../ui/BtnPrimary";

import { useState, useRef } from "react";

const COLORS = [
  "from-blue-800 to-blue-500",
  "from-orange-800 to-orange-400",
  "from-emerald-800 to-emerald-500",
  "from-purple-800 to-purple-500",
  "from-rose-800 to-rose-500",
  "from-cyan-800 to-cyan-500",
  "from-yellow-700 to-yellow-400",
  "from-indigo-800 to-indigo-500",
];

let nextId = 5;
const initialMembers = [
  { id: 1, name: "John Bae",     role: "SEO & Organic Growth",         color: COLORS[0], photo: "https://i.pravatar.cc/400?img=11" },
  { id: 2, name: "Liberti Jane", role: "Remarketing & CRO Expert",      color: COLORS[1], photo: "https://i.pravatar.cc/400?img=47" },
  { id: 3, name: "Nessy Alica",  role: "Content Marketing Specialist",  color: COLORS[2], photo: "https://i.pravatar.cc/400?img=32" },
  { id: 4, name: "Manuel Perdi", role: "Paid Ads & SEM Manager",        color: COLORS[3], photo: "https://i.pravatar.cc/400?img=15" },
];

/* ── Icons ─────────────────────────────────────────────────── */
const FbIcon     = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LiIcon     = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2zM2 9h4v12H2zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>;
const TwIcon     = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const UploadIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>;
const PencilIcon = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 0 1 2.828 2.828L11.828 15.828a2 2 0 0 1-1.414.586H8v-2.414A2 2 0 0 1 8.586 12.5L9 13z"/></svg>;
const XIcon      = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>;
const DragIcon   = () => <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2"><path strokeLinecap="round" d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01"/></svg>;
const PlusIcon   = () => <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14"/></svg>;
const CheckIcon  = () => <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const CameraIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/></svg>;

/* ── Social Button ──────────────────────────────────────────── */
function SocialButton({ icon }) {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${hov ? "bg-[#aaef45] text-gray-900 scale-110" : "bg-gray-900 text-white"}`}>
      {icon}
    </button>
  );
}

/* ── Editable field ─────────────────────────────────────────── */
function EditableText({ value, onChange, className, placeholder }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);
  const commit = () => { onChange(draft.trim() || value); setEditing(false); };

  if (editing) return (
    <div className="flex items-center gap-1">
      <input autoFocus value={draft} placeholder={placeholder}
        onChange={e => setDraft(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") setEditing(false); }}
        className={`${className} border-b border-[#aaef45] bg-transparent outline-none min-w-0 w-full`}/>
      <button onClick={commit} className="text-[#aaef45] shrink-0"><CheckIcon /></button>
    </div>
  );

  return (
    <button onClick={() => { setDraft(value); setEditing(true); }}
      className={`${className} group/edit flex items-center gap-1.5 text-left hover:opacity-70 transition-opacity`}>
      <span>{value}</span>
      <span className="opacity-0 group-hover/edit:opacity-40 transition-opacity shrink-0"><PencilIcon /></span>
    </button>
  );
}

/* ── Team Card ──────────────────────────────────────────────── */
function TeamCard({ member, onUpdate, onRemove, onPhotoUpload, onPhotoRemove, isDragging, onDragStart, onDragOver, onDrop, onDragEnd }) {
  const inputRef        = useRef(null);
  const [dropping, setDropping] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const initials = member.name.split(" ").map(n => n[0]).join("").toUpperCase();

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    onPhotoUpload(member.id, URL.createObjectURL(file));
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group select-none
        ${isDragging ? "shadow-2xl scale-105 rotate-1 opacity-80 z-50" : "hover:-translate-y-2 hover:shadow-xl"}`}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
        <span className="text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing transition-colors">
          <DragIcon />
        </span>
        <button onClick={() => onRemove(member.id)} className="text-gray-300 hover:text-red-400 transition-colors">
          <XIcon />
        </button>
      </div>

      {/* Photo zone */}
      <div
        className="relative mx-3 rounded-xl overflow-hidden"
        style={{ aspectRatio: "1/1" }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
        onDragOver={e => { e.preventDefault(); e.stopPropagation(); setDropping(true); }}
        onDragLeave={() => setDropping(false)}
        onDrop={e => { e.preventDefault(); e.stopPropagation(); setDropping(false); handleFile(e.dataTransfer.files[0]); }}
      >
        {member.photo ? (
          <>
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex flex-col items-center justify-center gap-3 transition-opacity duration-200 ${showOverlay || dropping ? "opacity-100" : "opacity-0"}`}>
              <button
                onClick={() => inputRef.current?.click()}
                className="flex items-center gap-2 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#aaef45] transition-colors duration-200 shadow-lg"
              >
                <CameraIcon /> Change photo
              </button>
              <button
                onClick={() => onPhotoRemove(member.id)}
                className="flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-red-500 transition-colors duration-200"
              >
                <XIcon /> Remove
              </button>
            </div>

            {dropping && <div className="absolute inset-1 border-2 border-white/80 border-dashed rounded-xl pointer-events-none"/>}
          </>
        ) : (
          <div
            onClick={() => inputRef.current?.click()}
            className={`w-full h-full bg-linear-to-br ${member.color} flex flex-col items-center justify-center cursor-pointer relative overflow-hidden`}
          >
            <span className="absolute text-white/10 text-8xl font-black select-none">{initials}</span>
            <div className={`relative z-10 flex flex-col items-center gap-2 transition-all duration-300 ${dropping ? "scale-110 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:scale-105"}`}>
              <div className="bg-white/25 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <UploadIcon />
              </div>
              <span className="text-white text-xs font-semibold">{dropping ? "Drop photo" : "Upload photo"}</span>
            </div>
            {dropping && <div className="absolute inset-1 border-2 border-white/70 border-dashed rounded-xl pointer-events-none"/>}
          </div>
        )}

        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={e => handleFile(e.target.files[0])}/>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="flex gap-2 mb-3">
          <SocialButton icon={<FbIcon />}/><SocialButton icon={<LiIcon />}/><SocialButton icon={<TwIcon />}/>
        </div>
        <EditableText value={member.name} placeholder="Full name"
          onChange={v => onUpdate(member.id, { name: v })}
          className="font-bold text-gray-900 text-base leading-tight w-full"/>
        <EditableText value={member.role} placeholder="Job title"
          onChange={v => onUpdate(member.id, { role: v })}
          className="text-gray-400 text-xs mt-1 w-full"/>
      </div>
    </div>
  );
}

/* ── Main ───────────────────────────────────────────────────── */
export default function TeamSection() {
  const [members, setMembers] = useState(initialMembers);
  const [dragId,  setDragId]  = useState(null);
  const [overId,  setOverId]  = useState(null);

  const uploadedCount = members.filter(m => m.photo).length;

  const addMember = () => {
    const color = COLORS[nextId % COLORS.length];
    setMembers(prev => [...prev, { id: nextId++, name: "New Member", role: "Job Title", color, photo: null }]);
  };

  const update      = (id, patch) => setMembers(prev => prev.map(m => m.id === id ? { ...m, ...patch } : m));
  const remove      = (id)        => setMembers(prev => prev.filter(m => m.id !== id));
  const uploadPhoto = (id, url)   => update(id, { photo: url });
  const removePhoto = (id)        => update(id, { photo: null });

  const handleDragStart = (e, id) => { setDragId(id); e.dataTransfer.effectAllowed = "move"; };
  const handleDragOver  = (e, id) => { e.preventDefault(); setOverId(id); };
  const handleDrop      = (e, id) => {
    e.preventDefault();
    if (dragId === null || dragId === id) return;
    setMembers(prev => {
      const arr  = [...prev];
      const from = arr.findIndex(m => m.id === dragId);
      const to   = arr.findIndex(m => m.id === id);
      const [item] = arr.splice(from, 1);
      arr.splice(to, 0, item);
      return arr;
    });
    setDragId(null); setOverId(null);
  };
  const handleDragEnd = () => { setDragId(null); setOverId(null); };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-start gap-10 mb-10">
          <div className="flex-1 min-w-50">
            <span className="inline-block bg-blue-600 text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Our Team</span>
            <h2 className="text-4xl font-bold text-gray-900 font-poppins leading-tight tracking-tight">
              Experts Driving Your<br/>Digital Success
            </h2>
          </div>
          <div className="flex-1 min-w-50 flex flex-col justify-end pt-10">
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Meet the talented people behind our work. Each brings unique skills and a shared commitment to results.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-[#aaef45] hover:border-[#aaef45] transition-all duration-200">
                Learn More
              </button>
              <span className="text-xs text-gray-400 tabular-nums">{uploadedCount}/{members.length} photos</span>
            </div>
          </div>
        </div>

        {/* Hint */}
        <div className="flex items-center gap-2.5 text-xs text-gray-400 mb-6 bg-white rounded-xl px-4 py-3 border border-dashed border-gray-200">
          <span className="text-gray-300 shrink-0"><CameraIcon /></span>
          <span>
            <strong className="text-gray-500 font-medium">Hover a photo</strong> to change or remove it ·
            <strong className="text-gray-500 font-medium"> Click name/role</strong> to edit ·
            <strong className="text-gray-500 font-medium"> Drag ⠿</strong> to reorder
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map(m => (
            <div key={m.id}
              className={`transition-all duration-200 ${overId === m.id && dragId !== m.id ? "scale-95 opacity-50" : ""}`}>
              <TeamCard
                member={m}
                onUpdate={update}
                onRemove={remove}
                onPhotoUpload={uploadPhoto}
                onPhotoRemove={removePhoto}
                isDragging={dragId === m.id}
                onDragStart={e => handleDragStart(e, m.id)}
                onDragOver={e => handleDragOver(e, m.id)}
                onDrop={e => handleDrop(e, m.id)}
                onDragEnd={handleDragEnd}
              />
            </div>
          ))}

          {/* Add card */}
          <button onClick={addMember}
            className="bg-white/60 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 min-h-75 hover:border-[#aaef45] hover:bg-white transition-all duration-200 group">
            <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#aaef45] flex items-center justify-center transition-colors duration-200">
              <span className="text-gray-400 group-hover:text-gray-900 transition-colors"><PlusIcon /></span>
            </div>
            <span className="text-sm text-gray-400 group-hover:text-gray-600 font-medium transition-colors">Add member</span>
          </button>
        </div>

      </div>
    </div>
  );
}

