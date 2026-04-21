import {useState} from "react"
import { C } from "../../Style/color"

export function Achievement(){

    const Stats=[
        {id:1,num:"472+" ,title:"Project Completed",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing",bg:"bg-blue-600"},
         {id:2,num:"472+" ,title:"Strong Client relationships",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing",bg:"bg-white"},
          {id:3,num:"472+" ,title:"Expertise Across Multiple Channels",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing",bg:"bg-blue-600"},
           {id:4,num:"472+" ,title:"Strong Client Relationships",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing",bg:"bg-white"},
    ]


    return (
        <section className="bg-white min-h-screen px-6 py-20 ">
          <div className="max-w-6xl mx-auto ">
          <div className="mb-1">
            <div className="bg-gray-100 w-full md:h-200 h-400">
             <div className="flex items-center gap-2.5 flex-col">
               <div style={{background:C.cta}} className="inline-flex items-center font-semibold  px-6 py-2.5 
               font-poppins  justify-center text-2xl rounded mt-10">
                
                Achievement

                </div> 
                <h2  className="text-2xl md:text-3xl  mt-6 font-bold  font-poppins  text-center">
                Proven Success in Driving Business Growth
                </h2> 
                <p style={{color:C.p}} className="text-center mt-6 leading-relaxed font-OpenSans">vero! Quos rerum quasi 
                    perspiciatis. Nobis, facilis culpa tenetur beatae<br/> laudantium quae maxime perspiciatis.</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative mt-20">
                  {
                    Stats.map((stats)=>(
                        <div style={{background:Stats.bg}} key={stats.id} className={`h-60 md:w-60 w-70 shadow rounded ${stats.bg}`}>

                            <div className=" font-bold text-3xl m-6 font-poppins text-right">
                               {stats.num} 
                            </div>
                            <div className=" flex flex-col items-center justify-center text-center ">
                              <h2 className="font-semibold text-2xl font-poppins">
                                {stats.title}
                            </h2> 
                            <p className="font-OpenSans mt-3 text-xs leading-relaxed" style={{color:C.p}}>{stats.desc}</p>    

                            </div>

                        </div>

                    ))
                  }  
                </div>

            </div>


            </div>
        </div>  

        </div>  


        </section>
    )



}