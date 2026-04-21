import { C } from "../../Style/color";
import{Mail,PhoneCall} from "lucide-react"
import {FaFacebook,FaWhatsapp,FaTiktok,FaInstagram} from "react-icons/fa"

export function TopBar(){

        const Social=[
            {icon:FaFacebook,linK:"https://facebook.com",id:1},
            {icon:FaWhatsapp,linK:"https://wa.me/27210836571?text=Hello there",id:2},
            {icon:FaInstagram,linK:"http://",id:3},
            {icon:FaTiktok,link:"https:///",id:4}
        ]

    return (
        <div className="hidden md:flex justify-between items-center px-8 py-2 text-xs font-medium"
        style={{background:C.dark,color:C.muted}}  >
        <div className="flex gap-6 items-center justify-center">
        <h1  className="text-white text-xl  font-poppins">Digital Marketing Agency</h1>
        <div className="flex flex-row">
          <span className="text-blue-700"><PhoneCall size={20}/></span>  
           <span className="text-white">+27710836571</span>  
        </div> 
         <div className="flex flex-row gap-1.5">
             <span className="text-blue-700 font-OpenSans"><Mail size={20}/></span>
             <span className="text-white font-OpenSans">joseph@caveledigital.co.za</span>     

         </div>

        </div>    
        <div className="flex gap-4">
            {
                Social.map((s)=>{
                    const Icons=s.icon
                    return (
                        <a href={s.linK} key={s.id} target="_blank" rel="noopener noreferrer"
                            className="cursor-pointer transition-colors" style={{color:"#475569"}}
                          onMouseEnter={e=>e.currentTarget.style.color=C.accent}  
                          onMouseLeave={e=>e.currentTarget.style.color="#475569"}
                        >
                                <Icons size={25}  />
                            </a>
                    )
                })
            }

        </div>
        
      

        </div>
    )
}