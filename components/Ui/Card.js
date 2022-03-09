export default function Card(props) {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 sm:w-96 sm:h-40 w-80 h-36 bg-[#131516] rounded-2xl relative border-4 border-[#2A2D31] shadow-2xl  justify-center content-center m-auto">
        <div className=" sm:w-40 sm:h-40 w-36 h-36 absolute sm:left-48 left-40 bottom-16 ">
          <img
            alt="1"
            className=" sm:w-40 sm:h-40 w-36 h-36 bg-cover bg-center rounded-2xl border-4 border-[#2A2D31] "
            src="/assist/pr1.png"
          />
          <div className=" mt-3 flex sm:justify-between justify-center">
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 h-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
          </div>
        </div>

        <div className=" pl-5 ">
          <h1 className="  text-gray-200 sm:text-lg text-base font-bold">
            Project 1
          </h1>
          <p className="   text-sm text-gray-400 font-light pt-3 sm:w-[150px] w-[135px] ">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          </p>
        </div>
      </div>
    </div>
  );
}
