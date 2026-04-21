import {useRef,useState,useEffect} from "react"
export function useInView(){
    const ref=useRef(null);
    const [vis,SetVis]=useState(false);
    useEffect(()=>{
        const io=new IntersectionObserver(([e])=>{if(e.isIntersecting) SetVis(true)});
        if(ref.current) io.observe(ref.current);
        return ()=>io.disconnect()
    },[])
    return [ref,vis]

}