export function Map(){


    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="mx-auto max-w-6xl ">
          <div className="mb-6">
          <div className="flex flex-col gap-10 items-center p-7 mx-auto">
            <div className="inline-flex items-center bg-gray-100 px-6 py-1.5  gap-9 rounded-full
             text-md font-semibold text-gray-600">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"/>
                Our Location
            </div>
            <div>
            <iframe title="map" className="md:w-6xl w-100 h-96
             rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.441086419714!2d27.22964431500001!3d-25.67248998365986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb8b8c5e7a9c6b%3A0x9e5a7c8e5b8e5b8!2sRustenburg%20Mall%20-%20Rustenburg%20City%20Centre%20-%20Rustenburg%20Central%20Business%20District%20-%20CBD%20Rustenburg%20-%20Rustenburg%20Central%20Business%20District%20-%20CBD%20Rustenburg%2029000!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          </div>
          </div>
        </section>
      )
              
}

