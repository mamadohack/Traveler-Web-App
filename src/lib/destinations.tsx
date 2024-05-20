import { NextPage } from "next";
import Image from "next/image";
import destination1 from "/public/imgs/destination (1).png";
import destination2 from "/public/imgs/destination (2).png";
import destination3 from "/public/imgs/destination (3).png";

interface Props {}

const Destinations: NextPage<Props> = ({}) => {
  return (
    <div className="mt-20 space-y-5 px-40 pb-20 bg-[#F6F6F6]">
      <h2 className="text-center poppins text-[#6246E5] font-semibold text-lg">
        Top Selling
      </h2>
      <h2 className="text-center volkhov text-[#14183E] text-[45px] font-bold">
        Top Destinations
      </h2>
      <div className="grid grid-cols-3 gap-20">
        <div className="relative">
          <Image
            alt="dest1"
            src={destination1}
            className="rounded-xl w-full h-auto block"
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full rounded-b-xl px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $5,42k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              10 Days Trip
            </p>
          </div>
        </div>
        <div className="relative rounded-xl bg-white overflow-clip">
          <Image
            alt="dest2"
            src={destination2}
            className=" w-full h-auto block rounded-b-2xl"
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $5,42k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              10 Days Trip
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="dest3"
            src={destination3}
            className="rounded-xl w-full h-auto block"
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full rounded-b-xl px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $5,42k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              10 Days Trip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
