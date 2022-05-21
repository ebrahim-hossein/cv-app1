const Work = ({ title, description, time }) => (
  <div className=" ">
    <div className=" sm:w-96  w-80  bg-[#131516] rounded-2xl relative border-4 border-[#2A2D31] shadow-2xl flex justify-center content-center m-auto">
      <div className=" m-4 w-80">
        <div className="flex justify-between">
          <h1 className="  text-gray-200 text-xs sm:text-md  font-bold">
            {title}
          </h1>
          <h1 className="  text-gray-200 text-xs sm:text-md font-md">{time}</h1>
        </div>
        <p className=" sm:text-sm  text-xs text-gray-400 font-light pt-3">
          {description}
        </p>
      </div>
    </div>
  </div>
);
export default Work;
