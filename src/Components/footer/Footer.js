import React from "react";

function Footer() {
    return(
        <>
        <footer>
            <div className=" flex items-center justify-center max-w-full h-96 bg-black text-white" style={{height: "400px"}}>
                    <div className="flex w-3/4   h-48 mt-18">

                        <div className=" ml-14 ">
                            <h4 className="font-bold text-xl mb-5">Top Products</h4>
                            <ul className="text-sm">
                                <li className=" mt-3 font-semibold">
                                    <a>Managed Website</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Managed Reputation</a>
                                </li>
                                <li  className=" mt-3 font-semibold">
                                    <a>Power Tools</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Marketing Service</a>
                                </li>
                            </ul>
                        </div>

                        <div className="ml-5 ">
                            <h4 className="font-bold text-xl mb-5">Quick Links</h4>
                            <ul className="text-sm">
                                 <li className="mt-3 font-semibold">
                                    <a>Jobs</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Brand Assets</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Investor Relations</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Terms of Service</a>
                                </li>
                            </ul>
                        </div>

                        <div className="ml-5 ">
                            <h4 className="font-bold text-xl mb-5">Features</h4>
                            <ul className="text-sm">
                                <li className="mt-3 font-semibold">
                                    <a>Jobs</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Brand Assets</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Investor Relations</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Terms of Service</a>
                                </li>
                            </ul>
                        </div>

                        <div className="ml-5 ">
                            <h4 className="font-bold text-xl mb-5">Resources</h4>
                            <ul className="text-sm">
                                <li className="mt-3 font-semibold">
                                    <a>Guides</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Reserach</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Experts</a>
                                </li>
                                <li className="mt-3 font-semibold">
                                    <a>Agencies</a>
                                </li>
                            </ul>
                        </div>

                        <div className=" lg:ml-32">
                            <h4 className="font-bold text-xl mb-5">NewsLetter</h4>
                            <p className="text-sm font-semibold mb-2">You can trust us, We only send promo offers,</p>
                            <input type="email" placeholder="Your Email Address" className="rounded bg-gray-700 h-10 placeholder:pl-4 placeholder:text-cyan-400 mt-2"/>
                            <button className="rounded bg-cyan-400 p-1 relative right-4">
                                SUBSCRIBE
                            </button>
                        </div>


                    
                    </div>

            </div>
                <div className=" max-w-full h-20 bg-black text-white">

                    <div className="w-3/4 h-20  relative bottom-16 font-bold left-40 flex  justify-between lg:ml-10">
                        <p className=" ml-5 text-sm">Copyright @2024 All rights reserved | This template is made by Vishu Sharma</p>

                        <div className="flex lg:mr-16">
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className=" w-5 h-5 ml-3 fill-white hover:fill-cyan-400">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                </svg>
                            </a>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-5 h-5 ml-3 fill-white hover:fill-cyan-400">
                                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                            </svg>
                            </a>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-5 h-5 ml-3 fill-white hover:fill-cyan-400">
                                <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"/>
                            </svg>
                            </a>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className=" w-5 h-5 ml-3 mr-1 fill-white hover:fill-cyan-400">
                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/>
                            </svg>
                            </a>
                        </div>
                </div>
                    </div>
        </footer>
        </>
    )
}

export default Footer;