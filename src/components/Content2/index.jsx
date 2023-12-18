import icon1 from "../../assets/Icon1.png"
import gambar2 from "../../assets/gambar2.png"

const Content2 = () => {
  return (
    <div className="h-[1180px] mt-20 xl:mx-[165px] lg:mx-[100px] md:mx-[50px] sm:px-2 px-2 justify-center flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="flex z-10 flex-col xl:max-w-screen-md lg:max-w-none md:max-w-none sm:max-w-none max-w-none gap-5">
          <div className="text-[36px] text-[#091133] font-medium">
            Light, Fast & Powerful
          </div>
          <div className="text-[#505F98] xl:max-w-none lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-none max-w-none text-[18px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </div>
          <div className="mt-[75px] grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex xl:max-w-none lg:max-w-[50%] md:max-w-[30%] sm:max-w-none max-w-none flex-col gap-[14px]">
              <img src={icon1} alt="icon1" className="w-[36px]" />
              <div className="text-[16px] text-[#091133] font-medium">
                Title Goes Here
              </div>
              <div className="text-[16px] text-[#5D6970] ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <img src={icon1} alt="icon1" className="w-[36px]" />
              <div className="text-[16px] text-[#091133] font-medium">
                Title Goes Here
              </div>
              <div className="text-[16px] xl:max-w-none lg:max-w-[50%] md:max-w-[30%] sm:max-w-none max-w-none text-[#5D6970]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="xl:w-full lg:w-[600px] right-0 xl:flex lg:flex md:flex lg:absolute md:absolute sm:hidden hidden justify-end">
          <img src={gambar2} alt="gambar2" />
        </div>
      </div>
    </div>
  )
}

export default Content2
