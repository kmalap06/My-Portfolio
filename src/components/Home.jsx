import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypeMe, { Delete } from "react-typeme";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="h-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center  ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
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
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
          As a Node.js developer, I have a solid foundation in JavaScript and
          web development. I am skilled in building applications using Node.js
          and the Express.js framework, and have experience working with
          databases like MongoDB. I am detail-oriented and committed to
          producing clean, maintainable code. I am enthusiastic about learning
          and staying up-todate with the latest trends in Node.js development.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
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
