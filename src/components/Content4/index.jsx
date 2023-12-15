import gambar5 from "../../assets/gambar5.png"

const Content4 = () => {
  return (
    <div className="h-[1080px] mt-20 mx-[165px] justify-center flex flex-col relative">
      <div className="flex flex-row justify-between items-center">
        <div className="w-full flex">
          <img src={gambar5} alt="gambar2" />
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

export default Content4
