import {Search,BarChart2,File, BarChartBig, icons} from "lucide-react"
import { C } from "../../Style/color"
export function Features(){

    const features=[
        {id:1,title:"Data-Driven Marketing Strategies" ,icon:BarChart2,desc:"Lorem ipsum dolor sit amet,consectetur sed do eiusmond"},
        {id:2,title:"Cutting-Edge SEO & Organic Growth",icon:Search,desc:"Lorem ipsum dolor sit amet,consectetur"},
        {id:3,title:"Cutting-Edge SEO & Orgnic Growth" ,icon:File,desc:"Lorem ipsum dolor sit amet,consectetur"},
        {id:4,title:"Analytics & Performance Tracking" ,icon:BarChartBig,desc:"Lorem ipsum dolor sit amet,consectetur"}

    ]
    return (
      <section className="min-h-screen  px-4 h-full  bg-blue-900 font-OpenSans py-16">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <p className="text-sm text-blue-200 mb-2">Features</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10">
            What makes our Digital marketing Agency stand Out?

          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
            {

              features.map((feature)=>{
                const Icon=feature.icon
                return (
                  <div key={feature.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                    <div className="w-10 h-10 flex items-center mx-auto  mb-5 justify-center rounded-full bg-blue-600">
                      <Icon size={15} className="text-white "/>
                    </div>
                    <h3 className="font-semibold text-lg text-blue-600 mb-2">
                      {feature.title}

                    </h3>
                    <p className="text-gray-500 text-sm">
                      {feature.desc}
                    </p>


                  </div>
                )
              })
            
              
                      

            


            
              
            }


          </div>

        </div>

      </section>
    )
    
  }