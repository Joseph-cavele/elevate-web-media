import { C } from "../../Style/color"
import { BtnPrimary } from "../ui/BtnPrimary"
import { CompaniesLogos } from "./Logomarqueen"

export function  CtaSection(){
    const Image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80"

    return (
        <div className="min-h-screen bg-white  font-OpenSans flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row gap-5 mx-auto w-full max-w-6xl "> 
          <div className="flex-[1.4] bg-blue-900 rounded p-7 flex flex-col gap-5 relative overflow-hidden ">
           <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-blue-800 opacity-10 blur-3xl pointer-events-none"/> 
           <div className="flex gap-4 items-start  ">
            <div className="  md:w-60 md:h-60 h-40 w-30 rounded-xl shrink-0 overflow-hidden">
             <img
             src={Image}
             alt="Team"
             className="w-full h-full object-cover opacity-80"
             />   

            </div>
            <div className="flex flex-col gap-2 ">
             <h2 className="font-bold  text-white text-[17px] leading-snug md:not-first:mt-10">
               Maximize Your Growth with Our Expert Digital Marketing 
            </h2>  
             <p className="text-gray-800 text-[12px] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
                temporibus quisquam pariatur. Ab vero atque beatae aliquid 
            
             </p>
             <div className="flex items-start mt-1.5">
             <BtnPrimary className="mt-10">Learn More</BtnPrimary>
             </div>

            </div>

           </div>
           

          </div>
          <div className="flex-1 bg-gray-100 rounded p-6 flex flex-col shadow  gap-4 ">
           <div className="flex justify-between items-start">
            <h3 className="font-bold text-gray-900 text-[17px]  font-poppins leading-snug max-w-37.5">
                Success Our Priority

            </h3>
            <div style={{background:C.cta}} className="w-9 h-9 rounded-full flex items-center justify-center shrink-0">
               <svg className="w-4.3 overflow-hidden  h-4.3 " viewBox="0 0 24 24 " fill="none">
                <path
                d="M6 3h12M6 8h12M6 13l10 8"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                d="M6 8c0 2.761 2.686 5 6 5s6-2.239 6-5"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                
                />

                </svg> 

            </div>
           
          

        </div> 
            <p className="text-gray-400 text-[12.5px] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde ut laborum iure eligendi,
             iste dicta tempore ad dignissimos nostrum veritatis est aperia
          </p>
            {/* Metrics */}
        <div style={{background:C.cta}} className="mt-auto grid grid-cols-3 rounded overflow-hidden">
            {
               [
                {num:"172+" ,label:"Drive Engagement"},
                {num:"283+" ,label:"Digital Presence"},
                {num:"453+",label:"Create Impact"},
               ].map((m,i,arr)=>(
                <div
                key={m.label}
                className={`py-3 text-center ${i<arr.length-1 ? "border-r border-blue-500/20 " :""}`}
                
                >
                 <span className="block font-extrabold font-poppins text-slate-900 text-lg">
                    {m.num}
                </span> 
                <span className="block text-slate-900 font-OpenSans  text-[9.5px] font-semibold mt-0.5 leading-tight">
                    {m.label}
            
                </span>  



                </div>
               ))
            }

        </div> 
      

          </div>
           
            
        </div>  
    
         
    
        
            

        

       

      

        

      

        
        

        </div> 
       
        
    )
    
       

    
    
}
