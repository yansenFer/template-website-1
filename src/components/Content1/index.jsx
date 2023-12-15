import gambar1 from "../../assets/gambar1.png"

const Content1 = () => {
  return (
    <>
      <img
        src={gambar1}
        className="w-[1290px] absolute right-0 -top-[49px]"
        alt="imageIlus"
      />
      <div className="flex flex-col gap-5 max-w-screen-sm z-10 h-[1420px] mx-[165px] -mt-56 justify-center">
        <div className="text-[50px] font-medium text-[#091133]">
          Introduce Your Product <br />
          Quickly & Effectively
        </div>
        <div className="text-[#505F98]  text-[18px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br />
          <br />
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
        <div className="flex flex-row gap-[30px] items-center mt-[64px]">
          <button className="bg-[#111B47] rounded-sm px-20 border-2 border-[#111B47]  py-2 text-white">
            Purchase UI Kit
          </button>
          <button className="border-2 border-[#091133] rounded-sm bg-transparent text-[#091133] px-20 py-2">
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

export default Content1
