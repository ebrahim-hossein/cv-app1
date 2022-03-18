const Work = ({ title, description, time }) => (
  <div className=" ">
    <div className=" sm:w-96 sm:h-40 w-80 h-36 bg-[#131516] rounded-2xl relative border-4 border-[#2A2D31] shadow-2xl flex justify-center content-center m-auto">
      <div className=" m-4 w-80">
        <div className="flex justify-between">
          <h1 className="  text-gray-200 text-base sm:text-lg  font-bold">
            {title}
          </h1>
          <h1 className="  text-gray-200 text-base sm:text-lg font-md">
            {time}
          </h1>
        </div>
        <p className="   text-sm text-gray-400 font-light pt-3">
          {description}
        </p>
      </div>
    </div>
  </div>
);
export default Work;
