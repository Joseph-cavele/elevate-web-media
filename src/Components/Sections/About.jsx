
import { C } from "../../Style/color"

export function AboutUs(){

    

const mission =[
    {num:"01" ,title:"Customized Strategies" ,desc:"We understand that every business is unique, "},
    {num:"02" ,title:"Experienced" ,desc:"We believe in the power of data to drive our strategies and decisions. "},
    {num:"03" ,title:"Client-Centric Approach",desc:"We prioritize ur business"}
]

    return (
        <section className="min-h-screen font-OpenSans bg-white py-20  px-6">
            {/*left-content  */}
            <div className="max-w-6xl mx-auto ">
                <div className="mb-10">
                 <div className="inline-flex items-start font-semibold leading-relaxed font-poppins bg-blue-50 rounded-full
                  text-sky-400 border border-gray-200 px-6 py-2 mb-8">
                    <span style={{background:C.cta}} className="w-1.5 h-1.5 rounded-full m-2"/>
                    About Us


                </div> 
                <div className=" flex md:whitespace-nowrap flex-col font-poppins md:flex-row md:items-start   md:gap-12 leading-snug md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">Maximize Your Growth with Our<br/> Digital Marketing</h2>
                    <p className="text-gray-500 font-OpenSans md:whitespace-nowrap text-sm leading-relax md:w-1/2 mt-4 md:mt-1">
                        Smart strategies. Real results. Let's take your business to the next level together.
                     </p>   
                        
                </div>  

                </div>
                <div className="flex flex-col md:flex-row gap-6">
                 <div className="md:w-1/2 rounded overflow-hidden min-h-64 relative">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"/>
                </div> 

                <div className="md:w-1/2 flex flex-col h-93">
                {   mission.map((mission)=>(
                    <div
                    key={mission.num}
                    
                    className="  bg-gray-100 rounded px-4   w-full h-38.5 pt-1 "
                    style={{boxShadow:"0 2px rgba(0,0,0,0.05"}}
                    
                    >
                    <div className="flex flex-row gap-5 items-center">   
                   <div style={{background:C.cta}} className="shrink-0 w-10 p-2.5 h-10 rounded-lg items-center font-poppins justify-center text-gray-700 font-bold             
                      ">
                    {mission.num}
                    
                    </div> 
                    <div className="mt-5">
                       <h3 className="text-gray-900 font-poppins font-bold text-base mb-1">
                        {mission.title}
                        </h3>
                        <p className="text-gray-500 font-OpenSans text-sm leading-relaxed ">
                            {mission.desc}
                        </p> 

                    </div> 
                    </div>    



                </div>
                ))
                    
                }
                    
                    </div>   
              

                </div>

            </div>            
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
            
         
        </section>
    )
}
