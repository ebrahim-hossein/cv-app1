import Styles from "./Skills.module.scss";

export default function ContactMe() {
  return (
    <div id="ContactMe" className="m-5">
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
                  Contact Me"
                >
                  Contact Me
                </h1>
              </div>
            </div>
            <p className=" text-gray-700  text-xl font-medium mt-6">
              &lt;/h1&gt;
            </p>
          </div>
          <div className="sm:flex justify-between content-center mt-7 gap-14">
            <div>
            <p className=" text-gray-700 ml-10 text-xl font-medium">
                &lt;p&gt;
              </p>
              <p className=" text-gray-300 font-medium  mx-14 my-3 sm:mx-0 max-w-lg">
                To contact me, you can use the following social networks, as
                well as the email and mobile phone that I have provided to you,
                and also use the CV download option to download and view the
                resume in PDF format. In case you want to see my portfolio use
                the other option.
              </p>
              <p className=" text-gray-700 ml-10 text-xl font-medium">
                &lt;/p&gt;
              </p>
              
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "./pdf/CV.pdf";
              }}
              className=" px-4 py-3 bg-[#131516] rounded-2xl border-4 border-[#2A2D31] shadow-2xl   content-center m-auto   flex justify-center gap-3 mt-7 transition ease-in-out delay-100  hover:-translate-y-1  duration-300"
            >
              <p className=" text-neutral-50">Download CV</p>
              <img
                alt="1"
                src="./Down.svg"
                className=" w-7 grid justify-center content-center m-auto"
              />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "./pdf/portfolio.pdf";
              }}
              className=" px-4 py-3 bg-[#131516] rounded-2xl border-4 border-[#2A2D31] shadow-2xl   content-center m-auto   flex justify-center gap-3 mt-7 transition ease-in-out delay-100  hover:-translate-y-1  duration-300"
            >
              <p className=" text-neutral-50">Download Portfolio</p>
              <img
                alt="1"
                src="./Down.svg"
                className=" w-7 grid justify-center content-center m-auto"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-5 flex flex-wrap gap-14 m-auto content-center justify-center my-16 max-w-5xl">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/hossein7dehghan";
          }}
          className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500"
        >
          <img
            alt="1"
            src="./assist/Github.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />

          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Github
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://www.linkedin.com/in/hossein7dehghan/";
          }}
          className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500"
        >
          <img
            alt="1"
            src="./assist/LinkedIn.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            LinkedIn
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://dribbble.com/hossein7dehghan";
          }}
          className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500"
        >
          <img
            alt="1"
            src="./assist/Dribbble.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Dribbble
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://instagram.com/hossein7dehghan";
          }}
          className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500"
        >
          <img
            alt="1"
            src="./assist/insta.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Instagram
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
        <button
          type="phone"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              // "https://api.whatsapp.com/send?phone=+989176322459"
              "https://wa.me/message/3BQLVSCUCJWRL1";
          }}
          className=" w-28 h-28 bg-[#131516] rounded-full border-4 border-[#2A2D31] shadow-2xl grid justify-center content-center m-auto gap-y-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-500"
        >
          <img
            alt="1"
            src="./whatsapp.svg"
            className=" w-7 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50 grid justify-center content-center m-auto">
            Whatsapp
          </p>
          <img
            alt="1"
            src="./assist/Down2.svg"
            className=" w-5 grid justify-center content-center m-auto"
          />
        </button>
      </div>
      <div className=" pb-5 md:flex m-auto md:max-w-3xl justify-center content-center">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "mailto:hossein-dehghan@info.com?subject=NewMail&body=Description"
            );
          }}
          className=" px-4 py-3 bg-[#131516] rounded-2xl border-4 border-[#2A2D31] shadow-2xl   content-center m-auto   flex justify-center gap-3 mt-7 transition ease-in-out delay-100  hover:-translate-y-1  duration-300"
        >
          <img
            alt="1"
            src="./Message.svg"
            className=" w-6 grid justify-center content-center m-auto"
          />

          <p className=" text-neutral-50">info@hossein-dehghan.com</p>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "tel:+989176322459";
          }}
          className=" px-4 py-3 bg-[#131516] rounded-2xl border-4 border-[#2A2D31] shadow-2xl   content-center m-auto   flex justify-center gap-3 mt-7 transition ease-in-out delay-100  hover:-translate-y-1  duration-300"
        >
          <img
            alt="1"
            src="./phone.svg"
            className=" w-6 grid justify-center content-center m-auto"
          />
          <p className=" text-neutral-50">+989176322459</p>
        </button>
      </div>
      <div className="flex content-center m-auto justify-center my-5">
      <p className=" text-gray-700  text-xl font-medium">&lt;p&gt;</p>
        <p className=" text-gray-300  font-normal text-sm sm:text-base sm:mx-7 mx-2 text-center">
          Copyright © 2016-2022 Hossein Dehgahn.<br/>
            All Rights Reserved.
        </p>
        
        <p className=" text-gray-700  sm:text-xl font-medium">&lt;/p&gt;</p>
      </div>
    </div>
  );
}
