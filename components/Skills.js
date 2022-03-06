import Styles from "./Skills.module.scss";
import { useLottie } from "lottie-react";
import water from "./data.json";

export default function Skills() {
  const options = {
    animationData: water,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  return (
    <div id="Skills" className="transition duration-700">
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
          Skills"
                >
                  Skills
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
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
        </div>
        <div className=" relative">
          {View}
          <div className=" absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2 z-10 ">
            <h1 className=" text-center text-md font-medium text-gray-100">
              FrontEnd <br />
              Developer
              <br />
              <span className="text-center text-xl font-black text-gray-100">
                97%
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-2 m-auto gap-6 mt-10 sm:max-w-5xl justify-center content-center max-w-sm">
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-7 rounded-lg te">
          React.js
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-300 shadow-lg py-3 px-7 rounded-lg">
          Next.js
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-7 rounded-lg">
          Html
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-7 rounded-lg">
          Css
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-7 rounded-lg">
          Js
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-500 shadow-lg py-3 px-7 rounded-lg">
          Sass
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-7 rounded-lg">
          Tailwind Css
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-7 rounded-lg">
          Bootstrap
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-7 rounded-lg">
          Ui/Ux
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-500 shadow-lg py-3 px-7 rounded-lg">
          Figma
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-7 rounded-lg">
          Sketch
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-7 rounded-lg">
          Wordpress
        </p>
        <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-7 rounded-lg">
          ....
        </p>
      </div>
    </div>
  );
}
