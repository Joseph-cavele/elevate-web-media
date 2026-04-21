import {useState,useEffect} from "react"
import { CONSULTATION_MODES, CONSULTATION_SERVICES, TIME_SLOT } from "../data/ConsultationData"
import { InputField } from "./InputField"
import { CONSULTATION_API } from "../Api/ConsultationApi"
import axios from "axios"
import {Check} from "lucide-react"



export function ConsultationForm() {

    const [form,SetForm]=useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        services:[],
        prefferedDate:"",
        prefferedTime:"",
    
        consultationMode:"",
        message:""
    



    })
  
    const [error,SetError]=useState({})
    const [success,SetSuccess]=useState(false)
    const [submitted,SetSubmitted]=useState(false)
    const [loading,SetLoading]=useState(false)

    const update=(field,value)=>SetForm(prev=>({...prev,[field]:value}))
    

    const toggleService=(s)=>{

        SetForm((f)=>({

            ...f,
            services:f.services.includes(s)?f.services.filter(serv=>serv!==s):[...f.services,s]
        }))
                    

        
       
            
        };

        const handleSubmit=async(e)=>{
            e.preventDefault()
            
            SetLoading(true)
            setTimeout(()=>{
                SetLoading(false)
                SetSubmitted(true)
            },1800)

                 
                        
                  


           }     




               
        
        

    if(submitted){
        return (
            <div className="min-h-screen bg-linear-to-br from-blue-50 via-white
            
            to-blue-50 flex items-center justify-center p-6">
           <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center border border-blue-100">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto
             mb-6 shadow-lg shadow-blue-200">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19"/>
            </svg>    

            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Consultation Booked!</h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              We've received your consultation request. Our team will reach out to {""} 
              <span className="font-medium text-gray-700 ">{form.email}</span> within 24 hours to confirm your 
              appointment

            </p>
            <div className="bg-blue-50 rounded-2xl p-4 mb-8 text-left space-y-2">
                {
                    form.prefferedDate && (
                        <p className="text-sm text-gray-600">
                            <span className="font-medium text-blue-700">🗓️Date:</span> {form.prefferedDate}
                        </p>
                    )
                }
                {
                    form.prefferedTime &&(
                        <p className="text-sm text-gray-600">
                            <span className="font-medium text-blue-700">⏲️Time:</span>{form.prefferedTime}

                        </p>
                    )
                }
                {
                    form.consultationMode &&(
                        <p className="text-sm text-gray-600">
                            <span className="font-medium text-blue-700">📃Mode:</span>{form.consultationMode}
                            {CONSULTATION_MODES.find((m)=>m.value===form.consultationMode)?.label}


                        </p>
                    )
                }
                   
    
            </div>
            <button
            onClick={()=>{SetSubmitted(false);SetForm({fullName:"",email:"",phoneNumber:""
                 ,services:[],prefferedDate:"",prefferedTime:"",consultationMode:"",message:""})}}
            >
                    Book Another Consultation
            </button>
            </div>     

            </div>
        )
    } 
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white
         to-blue-50 flex items-center justify-center  p-6 font-OpenSans">
          <div className="w-full max-w-2xl"> 
           <div className="text-center mb-8"> 
         <div className="inline-flex items-center gap-2 bg-blue-100
          text-blue-700 text-xs font-bold py-2 rounded-full mb-4 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
            Free Consultation
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>

        </div>
        <h1  className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Book Your {""}
            <span className="text-blue-500 relative">
                Consultation 
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 6 Q100 0 200 6" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"/>

                </svg>

            </span>
        </h1> 
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Let's discuss how we can grow your business. Fill in the form below and we'll get back to you with in 24 hours
        </p>
        </div> 
        {/* Form card */}
      
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="h-1.5 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600"></div>  
          <form onSubmit={handleSubmit} className="p-8 space-y-7">
            {/* Blue  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
              label="Full Name"  id="fulltName" value={form.fullName}
              onChange={(e)=>update("fullName",e.target.value)}
              placeholder="e.g John Doe" required
              
              />
              <InputField
              label="Email Address"  id="email" type="email" value={form.email}
              onChange={(e)=>update("email",e.target.value)}
              placeholder="john@example.com" required
              />  

            </div>
            {/* Phone */}
            <InputField
            label="Phone Number" id="phoneNumber" type="tel" value={form.phoneNumber}
            onChange={(e)=>update("phoneNumber",e.target.value)}
            placeholder="+27710836571" required
            
            />
            {/* Services */}
            <div className="flex flex-col gap-3 font-OpenSans">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">
                Select Services Interested In <span className="text-blue-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {   CONSULTATION_SERVICES.map((s)=>{
                const selected=form.services.includes(s);
                return (
                    <button key={s} type="button" onClick={()=>toggleService(s)}
                    className={`px-3 py-2.5 rounded-xl border-2 text-xs font-semibold text-left transition-all 
                        duration-200 leading-tight ${selected 
                            ?"bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-200"
                            :"bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 "
                        }
                        
                        `}
                    
                    >
                        {selected && <span className="mr-1"><Check size={20} className="text-white"/></span>}{s}


                    </button>
                )
            })

            } 
            </div> 
            {form.services.length>0 && (
                <p className="text-xs text-blue-500 font-medium ">
                    {form.services.length} services {form.services.length>1 ? "s" :""}elected

                </p>
            )}

            </div>
            {/* Date +Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date */}
              <div className=" flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">
                    Preferred Date <span className="text-blue-500">*</span>

                </label>
                <input
                type="date"
                value={form.prefferedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e)=>update("prefferedDate",e.target.value)}
                required 
                className="w-full px-4 py-3 bg-white border-2 border-gray-200
                 rounded-xl text-gray-800 text-sm outline-none transition-all duration-200
                  hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer"
                
                />
            </div> 
             {/*Time  */}
             <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">
                    Preferred Time <span className="text-blue-500">*</span>

                </label>
                <select
                className="w-full px-4 py-3 bg-white border-2
                 border-gray-200 rounded-xl text-gray-800 text-sm outline-none
                  transition-all duration-200 hover:border-blue-400 focus:border-blue-500 
                  focus:ring-4 focus:ring-blue-100 cursor-pointer appearance-none "
                >
                    <option value="">Select a time</option>
                    {
                        TIME_SLOT.map((t)=>(
                            <option key={t} value={t}>{t}</option>
                        ))
                    }

                </select>

             </div>


            </div>
            {/* Consultation Mode */}
            <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">
                    Consultation Mode <span className="text-blue-500">*</span>

                </label>
              <div className="grid grid-cols-3 gap-3">
                {CONSULTATION_MODES.map((m)=>{
                    const selected=form.consultationMode===m.value
                   return( <button
                    key={m.value}
                    type="button"
                    onClick={()=>update("consultationMode",m.value)}
                    className={`flex flex-col items-center gap-2 py-4 px-3 rounded-2xl
                         border-2 font-semibold text-sm transition-all duration-200 ${
                            selected
                            ?"bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-200 scale-105 "
                            :"bg-white border-gray-200 text-gray-600  hover:border-blue-400 hover:bg-blue-50  hover:text-blue-600"
                            
                         }`}
                    
                    >
                        <span className="text-2xl">{m.icon}</span>
                         <span className="text-xs leading-tight text-center">{m.label}</span>

                    </button>
                    )
                })}

            </div>  

            </div>
            {/* Message */}

            <div className="flex flex-col gap-1.5">
             <label htmlFor="message" className="text-sm font-semibold text-gray-700 tracking-wide">
                Message <span className="text-gray-400 font-normal text-xs">(optional)</span>

            </label>
            <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e)=>update("message",e.target.value)}
            placeholder="Tell us about your business goals, current challenges,or anything you'd like us know before the call..."
            className="w-full px-4 py-3 bg-white border-2 border-gray-200
             rounded-xl text-gray-800 text-sm placeholder-gray-400 outline-none
              transition-all duration-200  hover:border-blue-400
               focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none leading-relaxed"
            />  
            <p className="text-xs text-gray-400 text-right">{form.message.length}/500</p> 

            </div> 
               {/* submit */}
             <button
             type="submit"
             disabled={loading}
             className="w-full py-4 bg-blue-500 hover:bg-blue-600
              active:bg-blue-700 text-white font-bold text-base rounded-2xl
               transition-all duration-200 shadow-lg shadow-blue-200
                hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5
                 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-3"
             
             >
             {
                loading ? (
                    <>
                        <svg className="animate-spin w-5 h-5 text-white">
                            <circle className="opacity-25 "cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75 " fill="currentColor" d="M4 12a8  8 0 018-8vH4z"/>

                        </svg>
                        Submitting....

                    </>
                ):(
                    <>
                        Book My Free Consultation
                        <svg className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>

                        </svg>

                    </>
                )
             }   

            </button> 
             
            <p>
              🔒Your information is 100% secure and will never be shared.
              <br/> By submitting ,you agree to be contacted by our team.
            </p>

          </form>

        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
            Questions? Call us at <span className="font-semibold text-blue-500">+27710836571</span>

        </p>
        </div>  

        </div>
    )





   
}