const Faq = () => {
  return (
    <div className="space-y-4 mt-20">
      <button className="btn rounded-3xl border btn-ghost border-black text-lg">
        Faq
      </button>
      <h1 className="text-4xl font-semibold">Frequntly Asked Question</h1>

      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p>Schedule an appointment easily with just one click.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p>Yes</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
          What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p>Please bring your ID, insurance card, and a list of current medications.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
          Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer telemedicine appointments for your convenience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
