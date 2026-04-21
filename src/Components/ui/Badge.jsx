import { C } from "../../Style/color"
export function Badge({children}){
    return (


        <span className="shadow-md w-50" style={{background:"#fff",
            color:"#1D4ED8",
            border:"1.5px solid #1D4ED8 ",
            fontSize:11,
            fontWeight:600,
            padding:"4px 12px",
            borderRadius:20


        }}>
            {children}

        </span>
        

    
    )
}