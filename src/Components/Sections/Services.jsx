

import { C } from "../../Style/color"
import {Search,PhoneIcon,Mail,ShoppingCart,Zap,Laptop} from "lucide-react"

export function Services(){

    

const SERVICES=[
    {id:1, icon:Search,title:"SEO Optimization",desc:"Dominate search ranking with technical audits,strategic keyword clusters,and build to rank long-term"

    },
    {
      id:2,  icon:PhoneIcon,title:"Social Media Marketing", desc:"Build engaged communities and run creative paid-social campaigns that convert followers into paying clients."

    },
    {
      id:3,  icon:Mail,title:"Email Marketing" ,desc:"Automated nurture flows and broadcast campaigns that keep your pipeline full on autopilot."
    },
    {
      id:4, icon:Laptop, title:"Web developement & Web Design",desc:"Modern website that that responsive ,and load fast ",
       
    },
    {
      id:5,  icon:ShoppingCart, title:"E-commerce website", desc:"E-commerce helps businesses grow by selling products online ,automating sales ,and reaching a wide audience 24/7",
    
    },
    {
        id:6,icon:Zap,title:"Automation" ,desc:"Automation service simplify your business by handling repetitive tasks automatically.From marketing to customer support"
        
    }

]




    return (
        <section className="min-h-screen items-center flex justify-center bg-white">
           <div className="max-w-6xl w-full mx-auto  px-6 py-16">
            <div className="mb-10">
             <div className="flex flex-col md:flex-row gap-4">
              <div className="  w-full  h-full rounded  bg-blue-900    p-8 flex items-start flex-col gap-2.5">
                {/*Heading */}
                <div className="flex items-start flex-col md:flex-row md:gap-120">
                 <h1 className="text-md tracking-wider font-OpenSans font-bold text-blue-200">Our Services</h1>
                 <h2 className="text-3xl font-OpenSans  text-white ">
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
                                        <Icon className="text-white"/>

                                    </div>
                                   
                                    <h3 className="text-lg font-semibold font-OpenSans text-blue-600 mb-2">{services.title}</h3>
                                    <p className="text-gray-500 text-sm font-OpenSans">{services.desc}</p>
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
