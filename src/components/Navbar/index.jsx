const Navbar = () => {
  return (
    <div className="flex mx-[165px] bg-transparent flex-row z-10 items-center text-[#505F98] p-[15px] justify-center">
      <div className="flex flex-row w-full justify-between items-center ">
        <div className="grid text-[14px] grid-cols-3">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="font-extrabold text-[26px] text-[#37447E] gap-6">
          <text>Landing</text>
        </div>
        <div className="text-[14px] text-[#37447E] gap-6">
          <button className="bg-[#111B47] px-14 rounded-md text-white py-[4px] items-center">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
