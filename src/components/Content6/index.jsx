import backgroundCekung from "../../assets/background-cekung.png"

const Content6 = () => {
  return (
    <div className="flex flex-col xl:mb-[120px] lg:mb-[100px] md:mb-[80px] sm:mb-[80px] mb-[50px] mt-96 relative items-center justify-center">
      <img
        src={backgroundCekung}
        alt="backgroundCekung"
        className="absolute w-full h-screen "
      />
      <div className=" text-[#091133] z-10 xl:text-[36px] lg:text-[30px] md:text-[20px] sm:text-[20px] text-[20px] text-center font-medium">
        A Price To Suit Everyone
      </div>
      <div className="xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[11px] mt-[16px] text-[#6F7CB2] xl:w-[33%] lg:w-[33%] md:w-[33%] sm:w-[90%] w-[95%] text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </div>
      <div className="text-[50px] mt-[16px] z-10 text-[#222F65] font-bold">
        $40
      </div>
      <div className="text-[16px] z-10 text-[#6F7CB2] w-[33%] text-center">
        UI Design Kit
      </div>
      <div className="text-[14px] mt-14 z-10 text-[#5D6970] w-[33%] text-center">
        See, One price. Simple.
      </div>
      <button className="bg-[#111B47] z-10 xl:px-20 lg:px-20 md:px-20 sm:px-10 px-5 rounded-sm border-2 border-[#111B47] mt-[35px] py-2 text-white">
        Purchase Now
      </button>
    </div>
  )
}

export default Content6
