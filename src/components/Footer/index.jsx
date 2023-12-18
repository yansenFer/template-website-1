import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="pt-[68px] pb-[32px] z-50 bg-[#E7ECFF] xl:px-[165px] lg:px-[165px] md:px-[165px] sm:px-2 px2 items-center justify-center flex flex-col">
      <div className="flex border-b-2 border-[#CDD1D4] pb-[47px] xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-10 justify-between items-center w-full">
        <div className="text-[#939EA4] xl:hidden lg:hidden md:contents sm:contents contents text-[14px] font-medium">
          <button className="text-white bg-[#111B47] rounded-sm py-2 px-8">
            Purchase Now
          </button>
        </div>
        <div className="text-[#939EA4] xl:max-w-[10%] lg:max-w-none md:max-w-none sm:max-w-none max-w-none text-[14px] font-medium">
          ©2023 - develop code by Yanson Ferdinand Kurniadi
        </div>
        <div className="font-extrabold xl:contents lg:contens md:hidden sm:hidden hidden text-[26px] text-[#37447E] gap-6">
          Landing
        </div>
        <div className="text-[#939EA4] xl:contents lg:contents md:hidden sm:hidden hidden text-[14px] font-medium">
          <button className="text-white bg-[#111B47] rounded-sm py-2 px-8">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="mt-[20px] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-10 justify-between items-center w-full">
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col xl:gap-[60px] lg:gap-[60px] md:gap-[60px] sm:gap-[60px] gap-2 items-center text-[#070808] text-[14px]">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-row gap-[30px]">
          <FaFacebookF color="#B0B8BC" size={"16px"} />
          <FaLinkedin color="#B0B8BC" size={"16px"} />
          <FaTwitter color="#B0B8BC" size={"16px"} />
          <FaYoutube color="#B0B8BC" size={"16px"} />
          <FaInstagram color="#B0B8BC" size={"16px"} />
        </div>
      </div>
    </div>
  )
}

export default Footer
