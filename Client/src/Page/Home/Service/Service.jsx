import { FaArrowUpRightDots } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="grid grid-cols-2 gap-10 p-10 bg-[#FFFFF5]">
      <div className="flex-1 space-y-5">
        <button className="btn rounded-3xl border btn-ghost border-black text-lg">
          Service
        </button>
        <h1 className="text-4xl font-semibold">
          Empowering Health, <br />
          Enriching Lives
        </h1>
        <p className="font-normal pr-5">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>

        <button className="btn btn-warning">
          Appointment <FaArrowUpRightDots />
        </button>
      </div>

      {/* img */}
      <div className="relative">
        <img
          className="w-full rounded-3xl"
          src="../../../../public/Rectangle 27-2.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 bg-[#343268] bg-opacity-60 w-80 h-48 rounded-3xl p-5 flex flex-col justify-center text-white m-5">
          <div className="flex relative">
            <div>
              <h1 className="font-medium text-2xl">Advanced Technology</h1>
              <p className="mr-8">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <div className="items-center absolute right-0 bottom-0">
              <button>
                <img src="../../../../public/Group 28.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full rounded-3xl"
          src="../../../../public/Rectangle 27-1.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 bg-[#343268] bg-opacity-60 w-80 h-48 rounded-3xl p-5 flex flex-col justify-center text-white m-5">
          <div className="flex relative">
            <div>
              <h1 className="font-medium text-2xl">Online Doctor Meet</h1>
              <p className="mr-8">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
            <div className="items-center absolute right-0 bottom-0">
              <button>
                <img src="../../../../public/Group 28.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full rounded-3xl"
          src="../../../../public/Rectangle 27.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 bg-[#343268] bg-opacity-60 w-80 h-48 rounded-3xl p-5 flex flex-col justify-center text-white m-5">
          <div className="flex relative">
            <div>
              <h1 className="font-medium text-2xl">Consultancy your health</h1>
              <p className="mr-8">
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
            <div className="items-center absolute right-0 bottom-0">
              <button>
                <img src="../../../../public/Group 28.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
