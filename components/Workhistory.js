import Work from "./Ui/Work";
import Styles from "./Skills.module.scss";
import { useState } from "react";
import { work } from "../data/data";
let index = 4;
const Workhistory = ({ data }) => {
  const [workData, setWorkData] = useState(data);
  const isHide = workData.length === 6;
  const moreData = () => {
    let more = [];
    more = work.slice(index, index + 4);
    setWorkData((prevState) => [...prevState, ...more]);
    index += 4;
  };
  return (
    <div id="Workhistory" className="m-5 ">
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

          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
          <p className=" text-gray-300 font-medium  mx-10 my-3 ">
            Projects and work I have done or participated in so far and their
            histories.
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;/p&gt;</p>
        </div>
      </div>
      <div className=" mt-20 ">
        <div className="grid md:grid-cols-2 gap-14 m-auto content-center justify-center max-w-5xl">
          {workData.map((item) => (
            <Work key={item.id} {...item} />
          ))}
        </div>
        {!isHide && (
          <div className="sm:flex grid pt-12 gap-6 m-auto md:max-w-5xl max-w-sm justify-center content-center">
            <div className="sm:flex  content-center justify-center my-auto">
              <p className=" text-gray-700  text-xl font-medium mr-4">
                &lt;p&gt;
              </p>
              <p className=" text-gray-300 font-medium  mx-14 sm:mx-0">
                Use the Show More button to view more items.
              </p>
              <p className=" text-gray-700 ml-4 text-xl font-medium">
                &lt;/p&gt;
              </p>
            </div>
            <button
              onClick={moreData}
              className="bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white px-5 py-3 transition ease-in-out delay-100  hover:-translate-y-1  duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workhistory;
