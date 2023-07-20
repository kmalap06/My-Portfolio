import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/be6a0186-3763-4f1e-ad43-c68c942694bc"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-300 text-slate-200">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            corporate.kmofficial@gmail.com
          </p>
        </div>
        <input
          className="text-black p-2 font-bold mb-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="text-black p-2 font-bold mb-2 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="text-black p-2 font-bold mb-2 rounded-lg"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
