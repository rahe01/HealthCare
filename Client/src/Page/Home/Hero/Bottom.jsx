const Bottom = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center block lg:absolute lg:top-1/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 pb-2 lg:pb-20">
        Comprehensive Care <br /> for Every Patient
      </h1>

      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="card  shadow-xl bg-[#FBFBFB] pb-6">
          <div className="card-body">
            <h2 className="card-title text-5xl font-semibold">90% </h2>
            <p>Patient satisfaction rate, reflecting our commitment.</p>
          </div>
          <figure>
            <img src="https://i.ibb.co/Wg6mYSP/Group-12.png" alt="Chart" />
          </figure>
        </div>
        <div className="card  shadow-xl h-52 self-end bg-[#FFFFF5]">
          <div className="p-6">
            <h2 className=" text-5xl font-semibold">500+ </h2>
            <p>Board-certified doctors</p>
          </div>
          <figure>
            <img
              src="https://i.ibb.co/g6X6cd9/contract-1-1.png"
              alt="Certificate"
              className="w-24 h-24"
            />
          </figure>
        </div>

        <div className="card  shadow-xl h-44 self-end bg-[#FBFBFB] ">
          <div className="p-6">
            <div className="flex gap-2 items-center">
              <h2 className="card-title text-5xl font-semibold">4.8</h2>
              <img
                src="https://i.ibb.co/4MQrP8z/fi-sr-star.png"
                className="w-10 h-10"
                alt=""
              />
            </div>
            <p>Over 20,000 Patient</p>
          </div>
          <figure>
            <img src="https://i.ibb.co/xjYZ052/Group-7.png" alt="Certificate" />
          </figure>
        </div>

        <div className="card shadow-xl h-52 self-end bg-[#FFFFF5]">
          <div className="p-6">
            <h2 className="card-title text-5xl font-semibold">$5000</h2>
            <p>Money spend for poor patient</p>
          </div>
          <figure>
            <img src="https://i.ibb.co/0Z0DnG5/Group-1.png" alt="Certificate" />
          </figure>
        </div>
        <div className="card shadow-xl bg-[#FBFBFB]">
          <div className="card-body">
            <h2 className="card-title text-5xl font-semibold">50+</h2>
            <p>Free lession video for patient</p>
          </div>
          <figure>
            <img src="https://i.ibb.co/DVXVgGS/Group-2.png" alt="Certificate" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
