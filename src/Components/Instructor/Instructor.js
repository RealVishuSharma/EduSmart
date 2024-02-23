import React from "react";

export default function Instructor() {
    return(
        <>
            {/* Instructor Section/ Home Page */}
            <div className=" max-w-full h-screen  flex justify-center ">
                <div className="flex-row justify-center mt-20 w-3/4 text-center ">
                <div className="flex-row w-1/2 h-20 m-auto mb-10">
                    <h1 className="text-4xl font-bold mb-5">Our Instructor</h1>
                    <p className="text-sm text-gray-800 ">
                    There is a moment in the life of any aspiring astronomer that it
                    is time to buy that first telescope. It’s exciting to think about
                    setting up your own viewing station.
                    </p>
                </div>

                <div className="flex justify-between  h-72 mt-20">
                    <div className="flex-row">
                    <img
                        src={process.env.PUBLIC_URL + "/images/ins1.jpg.webp"}
                        alt="Instructor 1st"
                        className="ml-3"
                    />

                    <div className=" w-48 h-56 bg-lime-100 pt-2 hover:bg-white hover:shadow-2xl">
                        <h1 className=" text-lg mt-6">Ethel Davis</h1>
                        <h3 className=" text-base">Sr. Faculty Data Science</h3>
                        <p className="text-sm mt-2">
                        If you are looking at blank cassettes on the web, you may be
                        very confused at the difference in price.
                        </p>
                    </div>
                    </div>

                    <div className="flex-row">
                    <img
                        src={process.env.PUBLIC_URL + "/images/ins2.jpg.webp"}
                        alt="Instructor 2nd"
                        className="ml-3"
                    />

                        <div className=" w-48 h-56  bg-lime-100  hover:bg-white hover:shadow-2xl pt-2">
                            <h1 className=" text-lg mt-6">Ethel Davis</h1>
                            <h3 className=" text-base">Sr. Faculty Data Science</h3>
                            <p className="text-sm mt-2">
                            If you are looking at blank cassettes on the web, you may be
                            very confused at the difference in price.
                        </p>
                        </div>
                    </div>

                    <div className="flex-row">
                    <img
                        src={process.env.PUBLIC_URL + "/images/ins3.jpg.webp"}
                        alt="Instructor 3rd"
                        className="ml-3"
                    />

                        <div className=" w-48 h-56 bg-lime-100  hover:bg-white hover:shadow-2xl pt-2 ">
                            <h1 className=" text-lg mt-6">Ethel Davis</h1>
                            <h3 className=" text-base">Sr. Faculty Data Science</h3>
                            <p className="text-sm mt-2">
                            If you are looking at blank cassettes on the web, you may be
                            very confused at the difference in price.
                        </p>
                        </div>

                    </div>

                    <div className="flex-row ">
                    <img
                        src={process.env.PUBLIC_URL + "/images/ins4.jpg.webp"}
                        alt="Instructor 4th"
                        className="ml-3"
                    />

                        <div className=" w-48 h-56 bg-lime-100  hover:bg-white hover:shadow-2xl  pt-2">
                            <h1 className=" text-lg mt-6">Ethel Davis</h1>
                            <h3 className=" text-base">Sr. Faculty Data Science</h3>
                            <p className="text-sm mt-2">
                            If you are looking at blank cassettes on the web, you may be
                            very confused at the difference in price.
                        </p>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}