import { C } from '../../Style/color'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function BtnPrimary({children, small=false, className, to, onClick}){

    const [hov, setHov] = useState(false)
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

    return(
        <button 
        onMouseEnter={()=>setHov(true)}
        onMouseLeave={()=>setHov(false)}
        onClick={handleClick}
        className='font-semibold font-poppins  cursor-pointer rounded-lg transition-all'
        style={{background:hov? C.h2 :C.cta,color:"fff",
            padding:small ? "10px 20px" :"13px 26px",
            fontSize:small ? "13px " :"14px",
            boxShadow:hov ? `0 8px 24px ${C.cta} 55`:`0 4px 14px ${C.cta} 33`,
            transform:hov ? "translateY(-1px)" :"none",
            transition:"all .2s"
        }}
        
        >
            {children}
            
        </button>
    )
}