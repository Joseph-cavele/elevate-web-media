
import { SERVICES } from "../../data/Services"
import { C } from "../../Style/color"

export function Services(){


    return (
        <section className="min-h-screen items-center flex justify-center p-6 bg-white">
           <div className="max-w-6xl w-full mx-auto">
            <div className="mb-10">
             <div className="flex flex-col md:flex-row gap-4">
              <div className=" bg-blue-900 w-full  h-full rounded  p-8 flex items-start flex-col gap-2.5">
                {/*Heading */}
                <div className="flex items-start flex-col md:flex-row md:gap-120">
                 <h1 className="text-2xl tracking-wider font-poppins font-bold text-blue-600">Our Services</h1>
                 <h2 className="text-3xl tracking-widest  text-white ">
                    Smart marketing services <br/> that drive <em className="text-blue-600">real growth</em> 
                </h2>   

                </div>
                    {/*Cards  */}
                    <div className="grid grid-cols-1 relative md:grid-cols-3 gap-3 mt-10">
                       {
                        SERVICES.map((services)=>{
                            const Icon=services.icon
                            return (
                                <div key={services.id} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full -mt-10 bg-blue-600">
                                        {Icon}

                                    </div>
                                   
                                    <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">{services.title}</h3>
                                    <p className="text-gray-600 font-OpenSans">{services.desc}</p>
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
