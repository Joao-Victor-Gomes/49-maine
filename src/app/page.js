import Image from "next/image";
import MaineLogo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[50px] justify-center min-h-screen text-center px-4">
      <div>
        <Image src={MaineLogo} alt="49Maine Logo" width={142} height={142} />
      </div>
      <div className="flex flex-col items-center gap-10 md:gap-14">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg md:text-[32px] font-bold text-primary font-ppExtraBold">
            A Taste of Maine, Made Just for You.
          </h1>
          <div className="m-auto w-full flex justify-center">
            <p className="text-xs md:text-sm font-ppRegular">
              49Maine is opening soon, blending local traditions with fresh,
              comforting <br className="hidden lg:flex" /> flavors in a space
              that feels like home. Whether it’s a family dinner or a night{" "}
              <br className="hidden lg:flex" /> out, you’ll feel right at home
              with us.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[598px] flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full sm:w-[291px] h-[52px] rounded-md border text-center placeholder:text-center placeholder:text-[#B6B6B6] font-ppRegular"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full sm:w-[291px] h-[52px] rounded-md border text-center placeholder:text-center placeholder:text-[#B6B6B6] font-ppRegular"
            />
          </div>
          <button className="w-full h-[52px] rounded-md bg-primary text-[#FFE8C6] text-center transform transition duration-300 ease-in-out hover:scale-[0.99] font-ppExtraBold">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
