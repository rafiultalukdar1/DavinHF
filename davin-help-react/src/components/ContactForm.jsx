import { useState } from "react";

export default function ContactForm({ bgYellow = false, submitWhite = false }) {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission handling would go here.
  };

  return (
    <section className={`py-[50px] md:py-[100px] ${bgYellow ? "bg-brand-yellow" : ""}`}>
      <div className="container mx-auto max-w-[1320px] px-[15px]">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-2">
            <h2 className="text-black text-center font-archivo text-[40px] sm:text-[50px] lg:text-[80px] font-normal uppercase">
              Contact US
            </h2>
            <h5 className="text-brand-dark text-center text-[20px] sm:text-[23px] lg:text-[35px] font-normal">
              We will get back to you asap!
            </h5>
          </div>
          <div className="px-0 lg:px-[20px]">
            <form onSubmit={handleSubmit}>
              <div className="mt-[25px] mb-[25px] lg:mb-[42px]">
                <label
                  htmlFor="name"
                  className="block text-brand-dark text-[25px] lg:text-[40px] font-medium cursor-pointer mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-[8px] lg:rounded-[20px] border-2 border-black bg-brand-input px-[15px] py-[15px] lg:py-[30px] w-full outline-none"
                />
              </div>
              <div className="mb-[25px] lg:mb-[42px]">
                <label
                  htmlFor="mobile"
                  className="block text-brand-dark text-[25px] lg:text-[40px] font-medium cursor-pointer mb-2"
                >
                  Mobile No.
                </label>
                <input
                  id="mobile"
                  type="text"
                  value={form.mobile}
                  onChange={handleChange}
                  className="rounded-[8px] lg:rounded-[20px] border-2 border-black bg-brand-input px-[15px] py-[15px] lg:py-[30px] w-full outline-none"
                />
              </div>
              <div className="mb-[40px] lg:mb-[52px]">
                <label
                  htmlFor="email"
                  className="block text-brand-dark text-[25px] lg:text-[40px] font-medium cursor-pointer mb-2"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-[8px] lg:rounded-[20px] border-2 border-black bg-brand-input px-[15px] py-[15px] lg:py-[30px] w-full outline-none"
                />
              </div>
              <div className="mb-[25px] lg:mb-[42px]">
                <label
                  htmlFor="message"
                  className="block text-brand-dark text-[25px] lg:text-[40px] font-medium cursor-pointer mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-[8px] lg:rounded-[20px] border-2 border-black bg-brand-input px-[15px] py-[15px] lg:py-[30px] w-full outline-none resize-none"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className={`cursor-pointer mx-auto block mt-[10px] rounded-[12px] lg:rounded-[20px] ${
                    submitWhite ? "bg-white" : "bg-brand-yellow"
                  } text-black text-center font-archivo text-[30px] sm:text-[40px] lg:text-[84px] font-normal uppercase leading-[0.9] border-none px-[32px] py-[14px] w-[235px] sm:w-[300px] lg:w-auto lg:px-[100px] lg:py-[20px] lg:max-w-[589px]`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
