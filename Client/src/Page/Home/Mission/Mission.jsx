import { FaArrowUpRightDots } from "react-icons/fa6";

const Mission = () => {
  return (
    <div>
      <div className="flex justify-between my-10 lg:my-40">
        {/* text */}

        <div className="flex-1 space-y-5">
          <button className="btn rounded-3xl border btn-ghost border-black text-lg">
            Who we are
          </button>
          <h1 className="text-4xl font-semibold">
            We Help To Get <br />
            Soultions
          </h1>
          <p className="font-normal pr-5">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>

          <button className="btn btn-warning">
            Learn more <FaArrowUpRightDots />
          </button>
        </div>

        <div>
            <h1>Our mission is simple</h1>
            <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>

        {/* image */}
        <div className="flex-1">
          <img className="w-full" src="../../../../public/Rectangle 24.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
