import Work from "./Ui/Work";
import Styles from "./Skills.module.scss";
export default function Workhistory() {
  return (
    <div id="Workhistory" className="m-5 sm:m-0">
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
                  Work history"
                >
                  Work history
                </h1>
              </div>
            </div>
            <p className=" text-gray-700  text-xl font-medium mt-6">
              &lt;/h1&gt;
            </p>
          </div>

          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;/p&gt;</p>
          <p className=" text-gray-300 font-medium  mx-10 my-3 ">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor.
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
        </div>
      </div>
      <div className=" mt-20 ">
        <div className="grid lg:grid-cols-2 gap-14 m-auto content-center justify-center max-w-5xl">
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
        <div className="sm:flex grid pt-12 gap-6 m-auto lg:max-w-5xl max-w-sm justify-center content-center">
          <div className="sm:flex  content-center justify-center my-auto">
            <p className=" text-gray-700  text-xl font-medium mr-4">
              &lt;/p&gt;
            </p>
            <p className=" text-gray-300 font-medium  mx-14 sm:mx-0">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor.
            </p>
            <p className=" text-gray-700 ml-4 text-xl font-medium">&lt;p&gt;</p>
          </div>
          <button className="bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white px-5 py-3">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
