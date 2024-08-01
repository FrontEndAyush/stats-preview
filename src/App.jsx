function App() {
  return (
    <>
      <main className="flex items-center  justify-center h-screen">
        <div className="flex flex-col-reverse lg:flex-row mx-auto ">
          <div className="w-3/6 px-7  bg-[#1C1938] text-white ">
            <h1 className="text-white mt-12 font-fam lg:text-4xl text-xl font-bold text-center ">
              Get <span className="text-[#A855D3] ">insights</span> that help
            </h1>
            <h1 className="text-center text-xl  mr-12 lg:text-4xl   font-bold ">
              your business grow.
            </h1>
            <p className="mx-auto  mt-8 text-[#817F97] text-center lg:text-left font-fam-p lg:w-[400px] w-[180px] ">
              Lorem ipsum dolor sit, sit adipisicing elit. Quaerat libero
              eveniet obcaecati in, odit consequuntur. Perspiciatis nihil rerum
              veniam amet?
            </p>

            <div className="flex justify-center mt-20 lg:gap-[65px] gap-[50px] text-center flex-wrap lg:flex-nowrap">
              <div>
                <h1 className="text-2xl font-fam-p font-bold">10k+</h1>
                <p className="text-[#817F97] mt-1 text-[14px] font-semibold tracking-wider">COMPANIES</p>
              </div>
              <div>
                <h1 className="text-2xl font-fam-p font-bold">314</h1>
                <p className="text-[#817F97] mt-1 text-[14px] font-semibold tracking-wider">COMPANIES</p>
              </div>
              <div>
                <h1 className="text-2xl font-fam-p font-bold">215+</h1>
                <p className="text-[#817F97] mt-1 text-[14px] font-semibold tracking-wider">COMPANIES</p>
              </div>
            </div>
          </div>

          <div className="w-6/12">
            <img src="/images/image-header-desktop.jpg"  className= "hidden lg:block" alt="" />
            <img src="/images/image-header-mobile.jpg"  className= "block lg:hidden" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
