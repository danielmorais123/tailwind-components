import Nav from "../navbar/Nav"

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <div className="flex items-center justify-end lg:justify-center py-3">
        <div className="flex lg:items-center overflow-x-hidden lg:flex-row flex-col  w-[1000px] pl-5 lg:w-full ">
          <div className="w-full flex lg:justify-center">
            <div className="w-full flex justify-center p-6 max-w-[700px] ">
              <div className="lg:max-w-[576px] flex flex-col items-start gap-8">
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                  className="h-14 w-14"
                />
                <div className="flex items-center gap-3">
                  <span className="cursor-pointer text-[#4e46e5] border border-[#e5e7eb] bg-[#4e46e5]/10 text-sm font-semibold px-3 py-1 rounded-full">
                    What's new
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    Just shipped v1.0{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <p className="text-[#111827] text-6xl font-bold leading-[60px]">
                  Deploy to the cloud with confidence
                </p>
                <p className="text-lg">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="flex items-center gap-2">
                  <a className="bg-[#4e46e5] hover:opacity-85 transition text-white text-sm px-6 cursor-pointer py-2 rounded-[4px]">
                    Get Started
                  </a>{" "}
                  <a className=" text-sm px-6 cursor-pointer py-2 rounded-[4px] font-semibold">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="h-[753px] mt-4 lg:mt-0 w-full z-10  relative p-4 ml-6 bg-[#111827]/5 rounded-l-lg border border-[#e5e7eb]">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt=""
                className="h-[721px] absolute top-4 right-4 left-4 bottom-4 object-cover overflow-x-hidden object-left rounded-lg border border-[#e5e7eb]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
