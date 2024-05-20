import { NextPage } from "next";
import Image from "next/image";
import destination1 from "/public/imgs/destination (1).png";
import destination2 from "/public/imgs/destination (2).png";
import destination3 from "/public/imgs/destination (3).png";

interface Props {}

const Destinations: NextPage<Props> = ({}) => {
  return (
    <div className="mt-20 space-y-5 px-40 ">
      <h2 className="text-center poppins text-[#6246E5] font-semibold text-lg">
        Top Selling
      </h2>
      <h2 className="text-center volkhov text-[#14183E] text-[45px] font-bold">
        Top Destinations
      </h2>
      <div className="grid grid-cols-3 gap-20">
        <div className="relative drop-shadow">
          <Image
            alt="dest1"
            src={destination1}
            className="rounded-xl w-full h-auto block"
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full rounded-b-xl px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $3,42k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block me-2"
              >
                <path
                  d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z"
                  fill="#080809"
                />
              </svg>
              6 Days Trip
            </p>
          </div>
        </div>
        <div className="relative rounded-xl bg-white overflow-clip  pb-4 drop-shadow">
          <Image
            alt="dest2"
            src={destination2}
            className=" w-full h-auto block" //rounded-b-2xl
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $6,42k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block me-2"
              >
                <path
                  d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z"
                  fill="#080809"
                />
              </svg>
              9 Days Trip
            </p>
          </div>
        </div>
        <div className="relative drop-shadow">
          <Image
            alt="dest3"
            src={destination3}
            className="rounded-xl w-full h-auto block"
          ></Image>
          <div className="absolute bottom-0 left-0 bg-white h-[30%] w-full rounded-b-xl px-5">
            <h2 className="mt-3 ">
              <span className="text-[#5E6282] poppins">Rome, Italty</span>
              <span className="float-right text-[#5E6282] poppins ">
                $9,45k
              </span>
            </h2>
            <p className="mt-2 text-[#5E6282] text-sm ps-3 poppins">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block me-2"
              >
                <path
                  d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z"
                  fill="#080809"
                />
              </svg>
              28 Days Trip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
