import {useState} from "react"
import { C } from "../../Style/color"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export function BtnOline({children, dark=false, full=false, small=false, to, onClick}){

                const [h, SetH] = useState(false)
                const base = dark? "rgba(255 ,255,255,.25)" :C.cta
                const baseColor = dark ? "#fff" :C.cta
                const navigate = useNavigate()
                const { authenticate } = useAuth()

                const handleClick = () => {
                        if (onClick) {
                                onClick()
                        }
                        if (to) {
                                authenticate()
                                navigate(to)
                        }
                }

               return (

                <button 
                onMouseEnter={()=>SetH(true)} onMouseLeave={()=>SetH(false)}
                onClick={handleClick}
                className={`font-semibold font-Inter cursor-pointer rounded-lg transition-all ${full? "w-full" :""}`}
                style={{border:`2px solid ${h?C.cta :base}`,background:h?C.cta :'transparent',color:h? "#fff":baseColor,
                padding:small?"8px 18px ":"11px 24px",fontSize:small? "13px":"14px",transition:"all .2s"
            }}
                
                >
                {children}
                

                </button>
               ) 


}