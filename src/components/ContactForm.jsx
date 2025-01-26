import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-5">
        {/* Divider 1: Fun Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="unigeo font-bold text-3xl md:text-5xl text-[#282825] mb-7">
            Let's Make Some Magic!
          </h2>
          <p className="font-cabin text-base md:text-lg">
            Got a question, an idea, or just want to say hi? I'm all ears!
            Whether it's about coding, coffee, or cats (yes, I'm a cat lover),
            drop me a message. I promise I don't bite—unless it's pizza 🍕.
          </p>
          <p className="font-cabin text-base md:text-lg py-6">
            Your message might just make my day! 😊
          </p>
          <p className="font-cabin text-base md:text-lg">
            If you're sending a meme, make it good—I've got high standards! 😎
          </p>
          <p className="unigeo text-[#A4A4A4] text-base md:text-lg mt-10">
            Email me at
          </p>
          <a
            href="mailto:pratiknikat07@gmail.com"
            className="text-[#0D0c22] font-semibold hover:text-[#7c79a9]"
          >
            pratiknikat07@gmail.com
          </a>
        </div>

        {/* Divider 2: Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="name"
                className="w-full md:w-1/2 mb-4 bg-white rounded-xl border-2 border-[#242424] shadow-[2px_2px_0px_#242424] transition-all duration-300 transform hover:shadow-[4px_4px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px] p-4"
                placeholder="Your Name"
              />
              <input
                type="email"
                id="email"
                className="w-full md:w-1/2 mb-4 bg-white rounded-xl border-2 border-[#242424] shadow-[2px_2px_0px_#242424] transition-all duration-300 transform hover:shadow-[4px_4px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px] p-4"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full mb-4 bg-white rounded-xl border-2 border-[#242424] shadow-[2px_2px_0px_#242424] transition-all duration-300 transform hover:shadow-[4px_4px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px] p-4"
                placeholder="Subject of your message"
                required
              />
              <textarea
                id="message"
                rows="4"
                className="w-full mb-4 bg-white rounded-xl border-2 border-[#242424] shadow-[2px_2px_0px_#242424] transition-all duration-300 transform hover:shadow-[4px_4px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px] p-4"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-end mb-4">
              <button
                type="submit"
                className="bg-[#91A8ED] text-white rounded-xl border-2 border-[#242424] shadow-[2px_2px_0px_#242424] transition-all duration-300 transform hover:shadow-[4px_4px_0px_#242424] hover:translate-x-[-2px] hover:translate-y-[-2px] p-4"
              >
                Send Message 🚀
              </button>
            </div>
            <p className="text-[#91A8ED] text-center font-medium mt-4">
              Don't worry, I'll read your message faster than I can drink my
              coffee ☕!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
