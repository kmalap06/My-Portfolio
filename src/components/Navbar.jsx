import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
// import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-auto p-4 sm:px-20 flex justify-between items-center text-white bg-slate-950">
      <div>
        <span className="px-10 font-extrabold text-[2.5em]">Portfolio.</span>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className={styles.hoverEffect}>
          <Link to="home" smooth={true} duration={500}>
            Home
            <div className={styles.bottomBorder}></div>
          </Link>
        </li>
        <li className={styles.hoverEffect}>
          <Link to="about" smooth={true} duration={500}>
            About
            <div className={styles.bottomBorder}></div>
          </Link>
        </li>
        <li className={styles.hoverEffect}>
          <Link to="skills" smooth={true} duration={500}>
            Skills
            <div className={styles.bottomBorder}></div>
          </Link>
        </li>
        <li className={styles.hoverEffect}>
          <Link to="work" smooth={true} duration={500}>
            Work
            <div className={styles.bottomBorder}></div>
          </Link>
        </li>
        <li className={styles.hoverEffect}>
          <Link to="contact" smooth={true} duration={500}>
            Contact
            <div className={styles.bottomBorder}></div>
          </Link>
        </li>
      </ul>

      {/* hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 mr-5">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-10 opacity-100 z-10"
        }
      >
        <li className="text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600">
            <a
              className="flex justify-between items-center w-full text-slate-100"
              href="https://linkedin.com/in/kedarmalap"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-slate-100"
              href="https://github.com/kmalap06"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={"/"}
              download="Kedar Resume"
              rel="noreferrer"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  hoverEffect: "hover:text-sky-400 hover:scale-110 duration-500",
  bottomBorder: "border-b-[3px] border-b-sky-300 w-[75%]",
};

export default Navbar;
