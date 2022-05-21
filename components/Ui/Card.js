export default function Card({
  description,
  title,
  image,
  tech1,
  tech2,
  tech3,
  tech4,
  link,
}) {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 sm:w-96 sm:h-40 w-80 h-36 bg-[#131516] rounded-2xl relative border-4 border-[#2A2D31] shadow-2xl  justify-center content-center m-auto">
        <div className=" sm:w-44 sm:h-40 w-36 h-36 absolute sm:left-48 left-40 bottom-16 ">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              alt="porto"
              className="  sm:h-50 h-41 bg-cover bg-center rounded-2xl border-4 border-[#2A2D31] transition ease-in-out delay-100  hover:-translate-y-1  hover:scale-105 duration-300"
              src={image}
            />
          </a>

          <p className=" text-gray-200 sm:text-md text-sm font-medium px-2 pt-3">
            technologies :
          </p>
          <div className=" mt-3 flex sm:justify-between justify-center">
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 h-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src={tech1}
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src={tech2}
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src={tech3}
            />
            <img
              alt="1"
              className=" sm:w-9 sm:h-9 w-8 bg-cover bg-center rounded-full border-4 border-[#2A2D31] "
              src={tech4}
            />
          </div>
        </div>

        <div className=" pl-5 ">
          <h1 className="  text-gray-200 sm:text-md  text-sm  font-bold">
            {title}
          </h1>
          <p className=" sm:text-xs text-[10px] text-gray-400 font-light sm:pt-3 pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
