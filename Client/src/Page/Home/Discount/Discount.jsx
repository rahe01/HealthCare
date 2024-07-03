import { FaArrowUpRightDots } from "react-icons/fa6";

const Discount = () => {
  return (
  <div className="py-32 bg-[url('https://i.ibb.co/NSfLrWg/Frame.png')]">
      <div className="relative">
      <img
        className="w-full rounded-3xl"
        src="https://i.ibb.co/R0zdSvM/Rectangle-32.png"
        alt="Discount"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#0200434D] flex flex-col justify-center rounded-3xl">
        <div className="pl-16">
          <p className="text-white font-semibold text-5xl space-y-4 mb-4">
            <p>Get Your </p>
            <p>First Appointment</p>
            <p>at 50% Off!</p>
          </p>
          <div className="flex gap-5">
            <button className="btn btn-warning">
              Apointment <FaArrowUpRightDots />
            </button>
            <button className="btn bg-transparent text-white ">
              Learn more <FaArrowUpRightDots />
            </button>
          </div>
        </div>

        <div className="absolute top-16 right-16">
          <img src="https://i.ibb.co/d43qyWS/logo-light.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Discount;
