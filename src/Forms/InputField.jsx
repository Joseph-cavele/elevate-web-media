
export function InputField({label,type="text",name,value,onChange,options,error,required ,id,placeholder  }){

    return(
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-semibold text-gray-700 tracking-wide font-OpenSans">

                {label} {required && <span className="text-blue-500">*</span>}
                <p className="text-red-700">{error}</p>
        


            </label>
            <input
            id={id}
            
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-3 bg-white border-2
             border-gray-200 rounded-xl text-gray-800 text-sm
              placeholder-gray-400 outline-none transition-all duration-200  hover:border-blue-400
               focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            
            />


        </div>
    )






}

                               