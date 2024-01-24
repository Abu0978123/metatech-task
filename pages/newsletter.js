import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-blue-500 newsletter md:flex items-center justify-center">
        <div>
          <h1>Subscribe to our Newsletter</h1>
          <p className="text-black">
            "Bringing healthcare of International standards within the reach of
            every individual."
          </p>
          <div>
            <input type="text" className="border-blue-500 py-3" />
            <button className='class="bg-blue-500 bg-blue-600 text-white font-bold py-3 px-7 border-b-4 border-blue-700 mb-1  rounded '>
              Submit
            </button>
          </div>
        </div>

        <div>
          <img src="/female-dr.jpg" width={330} alt="About Us" class="  mb-7" />
        </div>
      </section>
    </>
  );
};

export default Contact;
