import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypeMe, { Delete } from "react-typeme";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex justify-center">
      {/* container */}
      <div className="px-8 flex flex-col justify-center">
        <p className="text-sky-500 font-bold">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-200">
          Kedar R. Malap
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <TypeMe
            typingSpeed={300}
            deleteSpeed={400}
            strings={[<Delete characters={15} />, "NodeJs Developer."]}
          />
        </h2>
        <p className="text-slate-300 py-4 max-w-[50rem] text-justify">
          As a Node.js developer, I have a solid foundation in JavaScript and
          web development. I am skilled in building applications using Node.js
          and the Express.js framework, and have experience working with
          databases like MongoDB. I am detail-oriented and committed to
          producing clean, maintainable code. I am enthusiastic about learning
          and staying up-todate with the latest trends in Node.js development.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-300 hover:border-sky-300 hover:text-black font-bold">
            View Work
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="group-hover:rotate-90 duration-300"
            >
              <HiArrowNarrowRight className="ml-3 " />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
