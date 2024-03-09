import ss from "../asset/icon.png"
import '@fontsource/poppins';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-sans shadow-md sticky top-0 bg-white">
        <a href="/"><img className="h-14 pl-4" src={ss.src} alt="kya itna bura hu mai maaa" /></a>
        <div className="flex items-center text-content gap-10 text-gray-500 pr-12">
          <a className="text-black py-4 " href="">Home</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5 " href="">Linkedln</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5 " href="">Twitter</a>
          <a className="hover:text-black font-[500] transition duration-300 ease-in-out py-5 " href="">Dribbble</a>
        </div>
    </div>
  )
}
