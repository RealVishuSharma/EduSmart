// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
// import Home from "../Home/Home";

function Header() {
  return (
    <>
      <header className=" max-w-full h-20 ">
        <div className="flex  items-center text-gray-700 ml-10 mr-10 justify-center  bg-white ">
          <div className="flex items-center w-3/4 h-20  justify-between  ">
            <div className="w-1/2 ">
              <Link to={"/"} className="flex items-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.png.webp"}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="flex items-center w-1/2 h-20  text-xs justify-end">
              <ul>
                <li>
                  <Link to="home" className="ml-10  hover:text-base hover:text-black">
                    HOME
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="about" className="ml-8 hover:text-base hover:text-black">
                    ABOUT
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link className="ml-8 hover:text-base hover:text-black">PAGES</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link className="ml-8 hover:text-base hover:text-black">BLOG</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link className="ml-8 hover:text-base hover:text-black">CONTACT</Link>
                </li>
              </ul>
            </div>

            <div className="w-1/12 justify-end items-center flex h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 hover:h-6">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
