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
    <div id="Skills" className=" m-5 ">
      <span className=" text-center justify-center flex my-24 text-gray-600">
        - - - - - - - - - - - - - - - - - - - - - -
      </span>
      <div className="sm:flex max-w-sm m-auto md:max-w-5xl  content-center">
        <div className=" mt-10">
          <div className="md:flex mb-5">
            <p className=" text-gray-700  text-xl font-medium sm:mt-6 my-5 sm:my-0 mr-5">
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

          
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
          <p className=" text-gray-300 font-medium  mx-10 my-3 sm:mx-10">
            My main skills are in Front-End. In this section, you can see most
            of the skills I have learned and I am working with.
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;/p&gt;</p>
          
        </div>
        <div className=" relative">
          {View}
          <div className=" absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2 z-10 ">
            <h1 className=" text-center text-md font-black text-gray-100">
              Front-End <br />
              Developer
              <br />
              {/* <span className="text-center text-xl font-black text-gray-100">
                97%
              </span> */}
            </h1>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3  m-auto gap-12 mt-10 sm:max-w-5xl justify-center content-center max-w-sm">
        <div className=" grid col-span-1 grid-cols-2 grid-rows-5 gap-6">
          <p className="col-span-2  text-gray-300 font-black text-center text-xl">
            Develop
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-3 rounded-lg te">
            React.js
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-300 shadow-lg py-3 px-3 rounded-lg">
            Next.js
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Html
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            Css
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-3 rounded-lg">
            JavaScript
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-500 shadow-lg py-3 px-3 rounded-lg">
            Sass
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Tailwind Css
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            Bootstrap
          </p>
        </div>
        <div className=" grid col-span-1 grid-cols-2 grid-rows-5 gap-6">
          <p className="col-span-2  text-gray-300 font-black text-center text-xl">
            Design
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Ui designer
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            Ux Developer
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-500 shadow-lg py-3 px-3 rounded-lg">
            Figma
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Sketch
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Lottie
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            Portotype
          </p>
        </div>
        <div className=" grid col-span-1 grid-cols-2 grid-rows-5 gap-6">
          <p className="col-span-2  text-gray-300 font-black text-center text-xl">
            Wordpress
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            woocommerce
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg py-3 px-3 rounded-lg">
            Elementor
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-blue-500 to-red-500 shadow-lg py-3 px-3 rounded-lg">
            Seo
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Responsive
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg py-3 px-3 rounded-lg">
            Database
          </p>
          <p className=" text-gray-200 font-medium text-lg bg-gradient-to-r from-pink-500 to-cyan-500 shadow-lg py-3 px-3 rounded-lg">
            ...
          </p>
        </div>
      </div>
    </div>
  );
}
