import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
const navigation = [
  {
    name: "Hossein Dehghan",
    href: "#HosseinDehghan",
    img: "./logo.svg",
    current: true,
  },
  { name: "Skills", href: "#Skills", img: "./Chart.svg", current: false },
  {
    name: "Portfolio",
    href: "#Portfolio",
    img: "./Category.svg",
    current: false,
  },
  {
    name: "Work history",
    href: "#Workhistory",
    img: "./Work.svg",
    current: false,
  },
  {
    name: "Contact Me",
    href: "#ContactMe",
    img: "./phone.svg",
    current: false,
  },
  { name: "Download CV", href: "./A4.pdf", img: "./Down.svg", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// injo

export default function Navbar() {
  const [navItems, setNavItems] = useState(navigation);
  const activeHandler = (name) => {
    setNavItems((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) return { ...item, current: true };
        else return { ...item, current: false };
      });
    });
  };
  return (
    <Disclosure
      as="nav"
      className="bg-[#1b1e218c] shadow-xl rounded-lg sticky top-0 z-50 backdrop-blur-lg m-5"
    >
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="  flex items-center justify-between h-16 ">
              <div className="absolute  left-0 flex items-center md:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-3">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-end md:items-stretch md:justify-center pr-3">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/logo.svg"
                    alt="Hossein Dehghan"
                  />
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className=" relative flex space-x-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "  bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white p-2 "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "md:px-3 md:py-2 lg:px-3 lg:py-3 rounded-lg text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          activeHandler(item.name);
                        }}
                      >
                        <div className="flex">
                          <img alt="12" src={item.img} className="h-5 pr-3" />
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white p-2"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-4 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div
                    className="flex"
                    onClick={() => {
                      activeHandler(item.name);
                    }}
                  >
                    <img alt="2" src={item.img} className="h-5 pr-3" />
                    {item.name}
                  </div>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
