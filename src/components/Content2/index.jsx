import icon1 from "../../assets/Icon1.png"
import gambar2 from "../../assets/gambar2.png"

const Content2 = () => {
  return (
    <div className="h-[1180px] mt-20 mx-[165px] justify-center flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
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
          <div className="mt-[75px] grid grid-cols-2 gap-[30px]">
            <div className="flex flex-col gap-[14px]">
              <img src={icon1} alt="icon1" className="w-[36px]" />
              <div className="text-[16px] text-[#091133] font-medium">
                Title Goes Here
              </div>
              <div className="text-[16px] text-[#5D6970]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <img src={icon1} alt="icon1" className="w-[36px]" />
              <div className="text-[16px] text-[#091133] font-medium">
                Title Goes Here
              </div>
              <div className="text-[16px] text-[#5D6970]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <img src={gambar2} alt="gambar2" />
        </div>
      </div>
    </div>
  )
}

export default Content2
