import { useState } from "react";
import ss from "../asset/icon.png"
import '@fontsource/poppins';

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const toggleFun = () => {
    setToggle(!toggle)
  }

  return (
    <div className="flex justify-between items-center font-sans shadow-md sticky top-0 bg-white">

        <a href="/"><img className="w-full h-14 pl-4 flex-shrink-0" src={ss.src} alt="Icon" /></a>

        <div className="flex items-center text-content gap-10 text-gray-500 pr-12 ">
          <a className="text-black py-4 tablet:block hidden" href="/">Home</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5  tablet:block hidden" href="https://www.linkedin.com/in/tejasviarora">Linkedln</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5  tablet:block hidden" href="https://twitter.com/TejasviArora17">Twitter</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5  tablet:block hidden" href="">Resume</a>

        <div onClick={toggleFun} className="flex flex-col gap-1 cursor-pointer tablet:hidden">
          <p className={`w-5 border-b-2 border-gray-500 ${toggle && "rotate-45 mt-1.5" }`}></p>
          <p className={`w-5 border-b-2 border-gray-500 ${toggle && "-rotate-45 -mt-1.5" }`}></p>
          <p className={`w-5 border-b-2 border-gray-500 ${toggle && "invisible" }`}></p>
        </div>

        <div className={`absolute bg-white shadow-xl p-5 flex transition-all duration-200 flex-col gap-5 top-10 w-[300px] right-10 ${!toggle && "invisible scale-0"}`}>
          <p className="text-gray-600">Home</p>
          <p className="text-gray-600">Linkedin</p>
          <p className="text-gray-600">Twitter</p>
          <p className="text-gray-600">Resume</p>
        </div>
        </div>
    </div>
  )
}
