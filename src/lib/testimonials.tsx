import { NextPage } from "next";
import testimonialImage from "/public/imgs/testimonialImage.jpg";
import Image from "next/image";
interface Props {}

const Testimonials: NextPage<Props> = ({}) => {
  return (
    <main className="px-40 mb-20 mt-14">
      <div className="flex flex-wrap">
        <div className="w-[40%] pe-10">
          <h2 className="poppins font-semibold text-[#6246E5]">Testimonials</h2>
          <h2 className="volkhov text-[40px] font-bold leading-[3rem] text-[#14183E] mt-2">
            What people say about Us.
          </h2>
          <p className="mt-16 space-x-5">
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#39425D] drop-shadow"></span>
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#E5E5E5] drop-shadow border border-gray-400"></span>
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#E5E5E5] drop-shadow border border-gray-400"></span>
          </p>
        </div>
        <div className="w-[60%] px-14">
          <div className="bg-white border drop-shadow p-8 rounded-xl">
            <Image
              alt="image testimonial"
              src={testimonialImage}
              className="absolute top-0 -left-0 -translate-x-1/2 -translate-y-1/2"
            ></Image>
            <p className=" text-[#4E4E73] poppins text-sm">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h2 className="text-[#4E4E73] poppins font-semibold mt-3">
              Mike taylor
            </h2>
            <h2 className="text-[#4E4E73] poppins text-sm mt-1">
              Lahore, Pakistan
            </h2>
            <div className="absolute -bottom-14 left-10">
              <h2 className="text-[#4E4E73] poppins font-semibold">
                Chris Thomas
              </h2>
              <h2 className="text-[#4E4E73] poppins text-sm mt-1">
                CEO of Red Button
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
