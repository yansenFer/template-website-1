import gambar1 from "../../assets/gambar1.png"

const Content1 = () => {
  return (
    <>
      <img
        src={gambar1}
        className="xl:w-[1290px] lg:w-[1290px] md:w-[600px] sm:w-[500px] w-[500px] absolute right-0 -top-[49px]"
        alt="imageIlus"
      />
      <div className="flex flex-col w-full gap-5 xl:max-w-screen-sm lg:max-w-screen-sm md:max-w-screen-sm sm:max-w-none max-w-none z-10 h-[1420px] xl:mx-[165px] lg:mx-[100px] md:mx-[50px] sm:px-2 px-2 -mt-56 justify-center xl:items-start lg:items-start md:items-start sm:items-center items-center">
        <div className="xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] self-start font-medium text-[#091133]">
          Introduce Your Product <br />
          Quickly & Effectively
        </div>
        <div className="text-[#505F98] text-[18px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br />
          <br />
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
        <div className=" flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:gap-[30px] lg:gap-[30px] md:gap-[30px] sm:gap-2 gap-2 w-full items-center mt-[64px]">
          <button className="bg-[#111B47] sm:w-full w-full rounded-sm border-2 border-[#111B47]  py-2 text-white">
            <div className="line-clamp-1">Purchase UI Kit</div>
          </button>
          <button className="border-2 sm:w-full w-full border-[#091133] rounded-sm bg-transparent text-[#091133] py-2">
            <div className="line-clamp-1">Learn More</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Content1
