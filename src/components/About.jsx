import React from "react";
import Gym from "../assets/Gym.png";
import People from "../assets/People.png";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <div>
      <section className="  dark:text-gray-100">
        <div className="container max-w-xl p-6 py-11 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              How it works
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400  bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-user"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Check in
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                    Our check-in process ensures a smooth start to your fitness journey. 
                    Whether you're new or returning, we prioritize your experience, 
                    offering tools and support for seamless gym access.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400  bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-book"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 5h9A1.5 1.5 0 0 1 17 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.5A1.5 1.5 0 0 1 6.5 5z" />
                    </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    Fitness Programs:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                    Utilizing modern techniques, we provide diverse fitness programs. 
                    Our approach ensures effectiveness and variety, 
                    catering to different fitness levels and goals.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-mddark: bg-violet-400  bg-gradient-to-r from-purple-500 via-purple-600 dark:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-coins"
                      >
                        <circle cx="8" cy="8" r="6" />
                        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                        <path d="M7 6h1v4" />
                        <path d="m16.71 13.88.7.71-2.82 2.82" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    Results:
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                    Our programs deliver visible results. 
                    We focus on personalized strategies, 
                    leveraging advanced methods to optimize 
                    your fitness journey and achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Tilt>
                <img
                  src={Gym}
                  alt="Gym-1"
                  className="mx-auto rounded-lg      "
                />{" "}
              </Tilt>
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  Our technology
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  We provide security and best experience
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Cutting-edge Hardware
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        We utilize state-of-the-art mining rigs and equipment,
                        ensuring optimal performance and efficiency in
                        Gymcurrency mining.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Advanced Software Solution
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Our custom-developed software solutions streamline the
                        mining process, enhancing control, monitoring, and
                        overall productivity
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Innovative Security Measures
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        We implement robust security protocols and encryption
                        technologies to safeguard your assets and data,
                        providing you with peace of mind throughout your mining
                        journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Tilt>
                  <img
                    src={People}
                    alt="Gym-2"
                    className="mx-auto rounded-lg    "
                  />{" "}
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
