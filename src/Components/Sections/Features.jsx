import {Search,BarChart2,File} from "lucide-react"
import { C } from "../../Style/color"
export function Features(){

    const features=[
        {id:1,title:"Data-Driven Marketing Strategies" ,icon:BarChart2,desc:"Lorem ipsum dolor sit amet,consectetur sed do eiusmond"},
        {id:2,title:"Cutting-Edge SEO & Organic Growth",icon:Search ,desc:"Lorem ipsum dolor sit amet,consectetur"},
        {id:3,title:"Cutting-Edge SEO & Orgnic Growth" ,icon:File,desc:"Lorem ipsum dolor sit amet,consectetur sed do eiusmond"}
    ]

    return (
        <section className="bg-white min-h-screen px-6 py-20">
            <div className="max-w-6xl flex flex-col md:flex-row gap-10 mx-auto">
            <div className="mb-10">
            <div className="flex-1 w-full md:w-6xl flex md:h-150 h-210 bg-blue-900 rounded ">
             <div className="flex  items-start p-4 flex-col gap-2.5">
              <span className="text-sky-500 text-2xl font-poppins md:text-3xl leading-relaxed">Features</span> 
              <h2 className="text-white text-3xl md:text-4xl mb-1.5 font-bold ">
                What Makes Our Digital Marking <br/> Agency Stand Out?

            </h2> 

           
             <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
               {
                features.map((features)=>{
                    const Icon=features.icon
                   return (
                        <div key={features.id} className="relate flex-1 md:w-92 w-89 h-50 mx-auto mr-10 md:mt-20 shadow rounded-2xl p-2 bg-white">
                            <div className="absolute  -mt-7 ml-74 md:ml-76">
                                <div style={{background:C.cta}} className=" w-10 h-10 flex rounded-full justify-center items-center">
                              <Icon size={15} className="text-gray-700 "/> 
                              </div>
                              

                            </div>
                            <div className="flex items-start gap-2.5 mt-2.5 p-2 flex-col">
                              <h2 style={{color:C.h2}} className="font-bold text-2xl font-poppins ">
                                {features.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed font-OpenSans">
                              {features.desc}  
                            </p>  



                            </div>


                        </div>
                   ) 

                })

                
               } 

             </div>
              </div>  

            </div>  
            </div>    

            </div>


        </section>



    )
}