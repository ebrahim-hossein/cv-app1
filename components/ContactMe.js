import Image from "next/image";
import Styles from "./Skills.module.scss";
export default function ContactMe() {
  return (
    <div>
      <span className=" text-center justify-center flex my-24 text-gray-600">
        - - - - - - - - - - - - - - - - - - - - - -
      </span>
      <div className="sm:flex max-w-sm m-auto md:max-w-5xl  content-center">
        <div className=" mt-10">
          <div className="md:flex">
            <p className=" text-gray-700  text-xl font-medium mt-6 mr-5">
              &lt;h1&gt;
            </p>

            <div id="app">
              <div id="wrapper">
                <h1
                  className={Styles.glitch}
                  data-text="
                  Contact Me"
                >
                  Contact Me
                </h1>
              </div>
            </div>
            <p className=" text-gray-700  text-xl font-medium mt-6">
              &lt;/h1&gt;
            </p>
          </div>

          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;/p&gt;</p>
          <p className=" text-gray-300 font-medium  mx-14 my-3 sm:mx-0">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor.
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-14 m-auto content-center justify-center my-16">
        <button className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            alt="1"
            src="./assist/Github.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Github
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            alt="1"
            src="./assist/LinkedIn.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            LinkedIn
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            alt="1"
            src="./assist/Dribbble.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Dribbble
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            alt="1"
            src="./assist/Github.svg"
            className=" w-9 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Github
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500">
          <img
            alt="1"
            src="./assist/Github.svg"
            className=" w-9 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Github
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
      </div>
      <div className="flex content-center m-auto justify-center my-5">
        <p className=" text-gray-700  sm:text-xl font-medium">&lt;/p&gt;</p>
        <p className=" text-gray-300  font-normal text-sm sm:text-base sm:mx-7 mx-2">
          Copyright © 2022 Hossein. All rights reserved.
        </p>
        <p className=" text-gray-700  text-xl font-medium">&lt;p&gt;</p>
      </div>
    </div>
  );
}
