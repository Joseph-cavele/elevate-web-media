import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function TrackPage(){

    const location=useLocation()
    useEffect(()=>{
        window.gtag('config','G-CWCNZH1WNC',{
            page_path:location.pathname
        });
    },[location])
    return null;
}