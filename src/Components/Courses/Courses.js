import React from "react";

export default function Courses() {
    return (
        <>
              {/* Courses Section/ Home Page */}
            <div className="max-w-full h-screen  flex justify-center">
            <div className="w-3/4 h-screen  flex justify-between items-center">
                <img
                src={process.env.PUBLIC_URL + "/images/courses-img.png"}
                alt="Courses Images"
                className="w-2/4 h-3/4"
                />

                <div className="w-2/4 h-3/4  flex justify-center items-center">
                <div className=" w-96 h-96 flex-row justify-center ">
                    <h1 className=" text-4xl font-semibold text-center w-4/5 mb-3 ml-7">
                    Over 2500 Courses from 5 Platforms
                    </h1>
                    <p className="w-full  text-sm font-semibold mt-5">
                    There is a moment in the life of any aspiring astronomer that it
                    is time to buy that first telescope. It’s exciting to think
                    about setting up your own viewing station. In the life of any
                    aspiring astronomer that it is time to buy that first telescope.
                    It’s exciting to think about setting up your own viewing
                    station.
                    </p>
                    <br />
                    <p className=" w-full  text-sm font-semibold">
                    It’s exciting to think about setting up your own viewing
                    station. In the life of any aspiring astronomer that it is time
                    to buy that first telescope exciting is time to buy that first.
                    </p>

                    <button className="rounded bg-cyan-500 p-2 pl-5 pr-5 mt-12 ">
                    Explore Courses
                    </button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}