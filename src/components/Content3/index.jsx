import gambar4 from "../../assets/gambar4.png"

const Content3 = () => {
  return (
    <div className="h-[1080px] mt-20 xl:mx-[165px] lg:mx-[100px] md:mx-[50px] sm:px-2 px-2 justify-center flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full xl:flex lg:flex md:flex sm:flex hidden">
          <img src={gambar4} alt="gambar2" />
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
        </div>
      </div>
    </div>
  )
}

export default Content3
