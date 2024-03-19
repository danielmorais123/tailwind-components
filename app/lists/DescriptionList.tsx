export default function DescriptionList() {
  return (
    <div className="border border-borderColor w-[90%] mx-auto rounded-md max-w-6xl ">
      <div className="py-12 ">
        <div className="flex flex-col px-4 pb-6 w-full">
          <p className="text-title font-semibold leading-7">
            Applicant Information
          </p>{" "}
          <p className="text-subtitle text-sm">
            Personal details and application.
          </p>
        </div>

        <div className="flex flex-col px-4 ">
          <div className="flex flex-col md:flex-row  py-6 w-full border-y border-borderColor bg-grey px-4 ">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              Full Name
            </p>
            <p className="text-biggrey text-sm md:w-2/3 ">Margot Foster</p>
          </div>
          <div className="flex flex-col md:flex-row  py-6 w-full  px-4">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              Application for
            </p>
            <p className="text-biggrey text-sm md:w-2/3 ">Backend Developer</p>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex flex-col md:flex-row border-y border-borderColor py-6 w-full bg-grey  px-4">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              Email address
            </p>
            <p className="text-biggrey text-sm md:w-2/3 ">
              margotfoster@example.com
            </p>
          </div>
          <div className="flex flex-col md:flex-row  py-6 w-full  px-4">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              Salary expectation
            </p>
            <p className="text-biggrey text-sm md:w-2/3 ">$120,000</p>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex flex-col md:flex-row border-y border-borderColor py-6 w-full bg-grey  px-4">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              About
            </p>
            <p className="text-biggrey text-sm  md:w-2/3 ">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 py-6 w-full  px-4">
            <p className="text-title font-medium text-sm md:w-1/3 leading-7">
              Attachments
            </p>
            <ul className="text-title text-sm md:w-2/3 border border-borderColor rounded-md">
              <li className="flex items-center p-4">
                <div className="w-full flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#9ca3af"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="font-medium">resume_back_end_developer.pdf</p>
                  <p className="text-lowgrey">2.4mb</p>
                </div>
                <div>
                  <a className="text-purple font-medium" href="#">
                    Download
                  </a>
                </div>
              </li>{" "}
              <hr />
              <li className="flex items-center p-4">
                <div className="w-full flex items-center gap-2 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#9ca3af"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="font-medium">coverletter_back_end_developer.pdf
</p>
                  <p className="text-lowgrey">4.4mb</p>
                </div>
                <div>
                  <a className="text-purple font-medium" href="#">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
