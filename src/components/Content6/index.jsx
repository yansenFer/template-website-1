import backgroundCekung from "../../assets/background-cekung.png"

const Content6 = () => {
  return (
    <div className="flex flex-col h-[1080px] relative items-center justify-center">
      <img
        src={backgroundCekung}
        alt="backgroundCekung"
        className="absolute w-full "
      />
      <div className="-mt-[400px] text-[#091133] z-10 text-[36px] font-medium">
        A Price To Suit Everyone
      </div>
      <div className="text-[16px] mt-[16px] text-[#6F7CB2] w-[33%] text-center">
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
      <button className="bg-[#111B47] z-10 px-20 rounded-sm border-2 border-[#111B47] mt-[35px] py-2 text-white">
        Purchase Now
      </button>
    </div>
  )
}

export default Content6
