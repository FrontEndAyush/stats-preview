import React from "react";

function App() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#090B1A] p-4">
      <div className="max-w-6xl w-full bg-[#1C1938] rounded-lg overflow-hidden shadow-xl">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2 p-6 lg:p-12 text-white">
            <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left mb-4">
              Get <span className="text-[#A855D3]">insights</span> that help
              <br className="hidden lg:inline" /> your business grow.
            </h1>
            <p className="text-[#817F97] text-center lg:text-left mb-8 lg:mb-12 max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit, sit adipisicing elit. Quaerat libero
              eveniet obcaecati in, odit consequuntur. Perspiciatis nihil rerum
              veniam amet?
            </p>
            <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left space-y-6 lg:space-y-0 lg:space-x-8">
              {[
                { value: "10k+", label: "COMPANIES" },
                { value: "314", label: "TEMPLATES" },
                { value: "12M+", label: "QUERIES" },
              ].map((stat, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <p className="text-[#817F97] text-sm uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#A855D3] opacity-70"></div>
            <img
              src="/images/image-header-desktop.jpg"
              className="hidden lg:block w-full h-full object-cover"
              alt="Business insights desktop"
            />
            <img
              src="/images/image-header-mobile.jpg"
              className="block lg:hidden w-full object-cover"
              alt="Business insights mobile"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
