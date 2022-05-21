export default function Info() {
  return (
    <div id="HosseinDehghan">
      <div className="sm:grid sm:grid-cols-2 sm:max-w-5xl justify-center content-center m-auto">
        <div className="px-3  py-4  sm:text-left justify-center relative  m-5">
          <div className="word  text-5xl sm:text-7xl lg:text-[8rem] absolute ">
            I&apos;m
          </div>
          <div className="word text-5xl sm:text-7xl lg:text-[8rem] absolute">
            Hossein
          </div>
          <div className="word text-5xl sm:text-7xl lg:text-[8rem] absolute">
            Web Developer
          </div>
          <div className="word text-5xl sm:text-7xl lg:text-[8rem] absolute">
            Web Desinger
          </div>

          <div className="sm:mt-80 mt-52 sm:max-w-md lg:max-w-lg  m-auto">
            <div className="flex">
              <p className=" text-gray-700  text-xl font-medium">&lt;h3&gt;</p>
              <h3 className=" text-gray-100 font-bold ">About Me</h3>
              <p className=" text-gray-700  text-xl font-medium">&lt;/h3&gt;</p>
            </div>

            <p className=" text-gray-700 ml-10 text-xl font-medium">
              &lt;p&gt;
            </p>
            <p className=" text-gray-300 font-medium  mx-9 my-3 ">
              My name is Hossein. I have a bachelor degree in information
              technology(IT). Since i was young , i was intrested in programming
              and designing, and I decided to try hard for my goal which is
              becoming a professional front-end designer and programmer and
              since then I’ve been learning and trying every day .
            </p>
            <p className=" text-gray-700 ml-10 text-xl font-medium">
              &lt;/p&gt;
            </p>
          </div>
        </div>

        <div className=" sm:mt-72 mt-40 mb-52 ">
          <div className="svgWrap relative flex justify-center m-auto content-center ">
            <img
              alt="2"
              src="./logo.svg"
              className="svgWrap__text  absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2"
            />
            <img
              alt="2"
              src="./logo.svg"
              className="svgWrap__text  absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2"
            />
            <img
              alt="2"
              src="./logo.svg"
              className="svgWrap__text  absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
