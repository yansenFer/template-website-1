import { useState } from "react"
import { IoMdMenu } from "react-icons/io"

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  return (
    <div className="flex xl:mx-[165px] lg:mx-[100px] md:mx-[50px] sm:mx-2 mx-2 bg-transparent flex-row z-10 items-center text-[#505F98] xl:p-[15px] lg:p-[15px] md:p-[15px] sm:p-0 p-0 justify-center">
      <div className="flex flex-row w-full gap-2 justify-between items-center ">
        <div className="xl:grid lg:grid md:grid sm:hidden hidden text-[14px] grid-cols-3">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="xl:hidden lg:hidden md:hidden sm:flex flex relative text-[14px] grid-cols-3">
          <IoMdMenu
            onClick={() => setIsDropdown(!isDropdown)}
            size={24}
            className="cursor-pointer"
          />
          <div
            className={`absolute top-8 bg-gray-200 shadow-xl min-w-fit rounded-sm p-2 ${
              isDropdown ? "flex flex-col" : "hidden"
            } gap-2`}
          >
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="font-extrabold text-[26px] text-[#37447E] gap-6">
          Landing
        </div>
        <div className="text-[14px] text-[#37447E] gap-6">
          <button className="bg-[#111B47] xl:px-14 lg:px-10 md:px-10 sm:px-5 px-3 rounded-md text-white py-[4px] items-center">
            <div className="line-clamp-1">Buy Now</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
