import Image from "next/image";
export default function Card(props) {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 w-96 h-40 bg-[#131516] rounded-2xl relative border-4 border-[#2A2D31] shadow-2xl  flex justify-center content-center m-auto">
        <div className=" w-40 h-40  absolute left-48 bottom-16 ">
          <img
            alt="1"
            className=" w-40 h-40 bg-cover bg-center rounded-2xl border-4 border-[#2A2D31] "
            src="/assist/pr1.png"
          />
          <div className=" mt-3 flex justify-around">
            <img
              alt="1"
              className=" w-9 h-9 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" w-9 h-9 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" w-9 h-9 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
            <img
              alt="1"
              className=" w-9 h-9 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src="/assist/pr1.png"
            />
          </div>
        </div>

        <div className=" pl-5 ">
          <h1 className="  text-gray-200 text-lg font-bold">Project 1</h1>
          <p className="   text-sm text-gray-400 font-light pt-3 w-[150px]">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          </p>
        </div>
      </div>
    </div>
  );
}
