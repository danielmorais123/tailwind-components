import Nav from "../navbar/Nav";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="max-w-[1400px] mx-auto w-full">
            <Nav />
        </div>
      
      <div className="flex items-center flex-grow">
        <div className="flex lg:items-center overflow-x-hidden max-w-[1400px] mx-auto lg:flex-row flex-col pl-5 lg:w-full ">
          <div className="w-full flex ">
            <div className="w-full flex p-6 ">
              <div className="lg:max-w-[700px] flex flex-col items-start gap-8">
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
          <div className=" flex">
            <div className="w-[366px] mt-4 lg:mt-0 object-contain z-10  relative p-4 ml-6  rounded-l-lg ">
              <svg viewBox="0 0 366 729" role="img" className="gx sr ub bec">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width="316" height="684" rx="36"></rect>
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                ></path>
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                ></path>
                <foreignObject
                  width="316"
                  height="684"
                  transform="translate(24 24)"
                  clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img
                    src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
                    alt=""
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
