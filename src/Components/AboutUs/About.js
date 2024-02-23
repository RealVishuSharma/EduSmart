import React from "react";
import { Link } from "react-router-dom";
import Courses from "../Courses/Courses";
import Instructor from "../Instructor/Instructor";
import Platforms from "../Platforms/Platforms";

function About() {
  return (
    <>
      {/* About Section/ Home Page */}
      <div className="max-w-full h-96 bg-black justify-center flex">
        <img
          className="max-w-full h-96 absolute z-0 opacity-70"
          src={process.env.PUBLIC_URL + "/images/banner.jpg.webp"}
          alt="Banner"
        />
        <div className="  w-1/3  h-96 relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-extrabold  m-5 ">About Us</h1>

          <p className="text-white font-bold  text-sm/loose text-center mb-5 ">
            In the History of modern Astronomy, there is probably no one greater
            leap forward than the building and the launch of the telescope,
            known as the Hubble.
          </p>
          <p className=" w-1/2 text-center text-white mb-2"> ______________</p>
          <Link to="about" className="text-sm text-white font-bold ">
            Home = About
          </Link>
          <p className=" w-1/2 text-center text-white"> ______________</p>
        </div>
      </div>

      {/* Courses Section/ Home Page */}
      <Courses/>

      {/* Instructor Section/ Home Page */}
      <Instructor/>

      {/* Platforms Section/ Home Page */}
      <Platforms/>
    </>
  );
}


export default About;
