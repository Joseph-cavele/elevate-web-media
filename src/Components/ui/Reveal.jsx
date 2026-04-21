import {useState} from "react"
import { useInView } from "./useInView"

export function Reveal({children,delay=0,className=""}){

    const [ref,vis]=useInView()

    return (
        <div ref={ref} className={className}
        style={{opacity:vis ? 1:0,transform:vis ?"translateY(0)":"translateY(28px)",
            transition:`opacity.6s ease ${delay}ms, transform.6s ease ${delay}ms`
        }}
        
        >
         {children}   

        </div>
    )


}