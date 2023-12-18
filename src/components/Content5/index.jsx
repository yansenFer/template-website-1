import gambar6 from "../../assets/gambar6.png"

const Content5 = () => {
  return (
    <div className="h-[1080px] mt-20 xl:mx-[165px] lg:mx-[100px] md:mx-[50px] sm:px-2 px-2 justify-center flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full xl:flex lg:flex md:flex sm:flex hidden">
          <img src={gambar6} alt="gambar2" />
        </div>
        <div className="flex flex-col max-w-screen-md gap-5">
          <div className="text-[36px] text-[#091133] font-medium">
            Light, Fast & Powerful
          </div>
          <div className="text-[#505F98]  text-[18px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </div>
          <button className="bg-[#111B47] max-w-[150px] rounded-sm border-2 border-[#111B47] mt-[35px] py-2 text-white">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content5
